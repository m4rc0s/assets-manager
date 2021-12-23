import { Router, Request, Response } from 'express'
import LoginService from "../auth/LoginService"
import { ILoginRequest, ILoginResponse } from './model/LoginDTO'
import { LoginDTO, LoginModel } from './model'

export default Router()
    .post("/signin", async (req: Request, res: Response): Promise<Response> => {
        let loginData: ILoginRequest = req.body as ILoginRequest

        let loginDTO = LoginDTO.create(loginData.username, loginData.password)

        let login = await LoginService.create(loginDTO)

        let result: ILoginResponse = { 
            username: login.username 
        } as ILoginResponse

        return res.status(201).json(result)

    })
    .post("/login", async (req: Request, res: Response): Promise<Response> => {
        let loginData = req.body
        let user = await LoginModel.findOne({
            username: loginData.username,
            password: loginData.password
        })

        if(user) {
            return res.status(200).json({
                token: "tokenaqui"
            })
        } else {
            return res.status(401).json({
                "code": "InvalidLoginData",
                "message": "Login fail"
            })
        }
    })