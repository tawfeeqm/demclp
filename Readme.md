
# Node Express Backend Boilerplate

## Setup

1. Ensure you have Node, npm, and Docker installed.
2. Copy `.env.sample` to `.env`.
3. Start the database using: `docker-compose up -d`.
4. Initialize the schema with: `npm run init-schema`.

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

