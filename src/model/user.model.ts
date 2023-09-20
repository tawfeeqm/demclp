import { UserSignUp } from 'src/types/user.types';
import pool from '../../getDbClient';
import { PGQueryResult } from 'src/types/pg.types';

export async function findUserByEmail(email: string) {
    try {
        const findUserQuery = `SELECT id, email, password, username FROM users WHERE email = $1`;
        const userResult = await pool.query(findUserQuery, [email]);
        return userResult;
    } catch (error: any) {
        console.log(error);
        return error;
    }
}

export async function createUser(userObj: UserSignUp) {
    const { email, password, username } = userObj;
    try {
        const query = `
            INSERT INTO users (username, password, email)
            VALUES ($1, $2, $3)
            RETURNING id, username, email;  
        `;
        const result = await pool.query(query, [username, password, email]);
        return result.rows[0];
    } catch (error: any) {
        console.log(error);
        throw new Error(error);
    }
}
