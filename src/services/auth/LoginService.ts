import mongoose from "mongoose"
import { LoginModel, LoginDTO, ILoginDTO } from "./model"

export class LoginService {
    
    static create = async (loginData: LoginDTO): Promise<ILoginDTO> => {

        let loginModel = new LoginModel({
            username: loginData.username,
            password: loginData.password
        })
        
        let login = await loginModel.save()
    
        return LoginDTO.fromModel(login)
    }
}

export default LoginService