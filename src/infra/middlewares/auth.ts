import jwt, {Secret, JwtPayload} from 'jsonwebtoken';
import { Request, Response, NextFunction} from 'express';


export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const auth = async(req: Request, res: Response, next: NextFunction) => {
    const secret = process.env.SECRET_KEY
    try {
        const token = req.header('Authorization')?.replace('Bearer ','');

        if(!token){ throw new Error('Nenhum token foi encontrado.')}

        if(!secret){
        throw new Error('Secret não encontrado')
    }
        const decoded = jwt.verify(token, secret);
        (req as CustomRequest).token = decoded;

        next()
    } catch (error) {
        res.status(401).send(`Please Authenticate ${error}`);
    }
}