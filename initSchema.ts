import pool from './getDbClient'

// const client = getDbClient()

export default async function createSchema() {
  try {
    // await client.connect()

    // Define your schema creation queries here
    const schemaQueries = [
      `CREATE TABLE IF NOT EXISTS migrations (id SERIAL PRIMARY KEY, name VARCHAR(50))`,
      `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`,
      `CREATE TABLE IF NOT EXISTS assets (
  id SERIAL PRIMARY KEY,
  type VARCHAR(50) NOT NULL CHECK (type IN ('picture', 'video')),
  url VARCHAR(255) NOT NULL,
  title VARCHAR(255),
  description TEXT,
  user_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
    ];

    for (const query of schemaQueries) {
      await pool.query(query)
      // console.log('Executed query:', query)
    }
    console.log('Schema creation completed successfully!')
    pool.query('SELECT table_name FROM information_schema.tables WHERE table_schema = \'public\'', (err, result) => {
      if (err) {
        throw err;
      }
      console.log('Tables in the database:', result.rows.map(row => row.table_name));
    });
  } catch (error) {
    console.error('Error creating schema:', error)
  }
}

createSchema()
