import LoginModel, { ILoginModel } from "./Login"

export interface ILoginRequest {
    username: String,
    password: String
}

export interface ILoginResponse {
    username: String
}

export interface ILoginDTO {
    username: String,
    password: String
}

class LoginDTO implements ILoginDTO {

    username: String = ""
    password: String = ""

    constructor(username: String, password: String) {
        this.username = username
        this.password = password
    }

    static fromModel = (loginModel: ILoginModel): ILoginDTO => {
        return new LoginDTO(
            loginModel.username,
            loginModel.password
        )
    }

    static create = (username: String, password: String) => {
        return new LoginDTO(
            username,
            password
        )
    }
}

export default LoginDTO