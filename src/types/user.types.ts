export type UserSignUp = {
    username: string,
    email: string,
    password: string
}

export type CreatedUserInDb = {
    id: string,
    email: string,
    username: string
}

export type UserLogin = {
    id: string;
    email: string;
    password: string;
}
