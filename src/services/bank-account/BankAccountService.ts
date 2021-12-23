import { Router } from 'express'

export default 
    Router().get("/", (req, res) => {
        res.send(400).json({
            "message": "not ready yet"
        })
    })