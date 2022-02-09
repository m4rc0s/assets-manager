import { ILoginModel } from './Login'

export interface ILoginRequest {
  username: string
  password: string
}

export interface ILoginResponse {
  username: string
}

export interface ILoginDTO {
  username: string
  password: string
}

class LoginDTO implements ILoginDTO {
  username = ''
  password = ''

  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }

  static fromModel = (loginModel: ILoginModel): ILoginDTO => {
    return new LoginDTO(loginModel.username, loginModel.password)
  }

  static create = (username: string, password: string) => {
    return new LoginDTO(username, password)
  }
}

export default LoginDTO
