import * as jwt from "jsonwebtoken"
import {Request, Response} from "express"

const authMiddleware = (request: Request, response: Response, next: Function) => {
  try {
    const token = request.headers.authorization?.split(' ')[1] || ''
    jwt.verify(token, process.env.JWT_KEY || 'secret')
    next()
  } catch (error) {
    return response.status(401).json({
      message: 'Auth failed'
    })
  }
}

export {
  authMiddleware
}