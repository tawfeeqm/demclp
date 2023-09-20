
# Node Express Assets Backend

## Setup

1. Clone your repository:
   ```bash
   git clone https://github.com/tawfeeqm/demclp.git
   cd demclp
   ```
2. Ensure you have Node, npm, and Docker installed.
4. Copy `.env.sample` to `.env`.
5. Start the database using: `docker-compose up -d`.
6. Run ```npm i```
7. Initialize the schema with: `npm run init-schema`.

## Run

Execute `npm run dev`.

## API Endpoints

### User Authentication

#### Signup:
**Method**: POST

**Endpoint**: `/users/signup`

**Payload**:
```json
{
    "email": "lynn@email.com",
    "username": "lynn",
    "password": "hello123"
}
```

#### Login:
**Method**: POST

**Endpoint**: `/users/login`

**Payload**:
```json
{
    "email": "lynn@email.com",
    "password": "hello123"
}
```

### Assets

#### Create Asset:
**Method**: POST

**Endpoint**: `/assets/:userId`

**Payload**:
```json
{
    "title": "my pic",
    "url": "https://pic.website/1",
    "description": "just my pic",
    "type": "picture"
}
```

#### Get Asset by ID:
**Method**: GET

**Endpoint**: `/assets/:assetId`

**Response**:
```json
{
    "response": {
        "type": "picture",
        "title": "my pic",
        "url": "https://tawfeeq.live",
        "description": "just my pic"
    }
}
```

