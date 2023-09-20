import { UserSignUp, UserLogin, CreatedUserInDb } from 'src/types/user.types';
import { emitHTTPErrorResponse } from '../middleware/errorHandling.middleware';
import bcrypt from 'bcrypt';
import { createUser, findUserByEmail } from '../model/user.model';

export async function signUpUser(obj: UserSignUp): Promise<CreatedUserInDb | void> {
    const { email, password, username } = obj;
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS || '10'));
    const findUser: any = await findUserByEmail(email);
    if (findUser.rowCount > 0) {
        console.log('user already exists')
        emitHTTPErrorResponse(400, 'Username or email already exists');
    }
    const createUserInDb: CreatedUserInDb = await createUser({ email, password: hashedPassword, username });
    return createUserInDb;
}


export async function loginUser(obj: UserLogin) {
    const { email, password } = obj;
    const userResult = await findUserByEmail(email);
    if (userResult.rowCount === 0) {
        emitHTTPErrorResponse(404, 'Incorrect email or password');
        return;
    }
    const isMatch = await bcrypt.compare(password, userResult.rows[0].password);
    if (!isMatch) {
        emitHTTPErrorResponse(401, 'Incorrect email or password');
        return;
    }
    return {
        message: "Authenticated successfully",
        user: {
            email: email,
            id: userResult.rows[0].id,
        }
    };
}

