import { Request, Response } from "express";

export const corsController = {
    // preflightFindAll(req: Request, res: Response) {
    //     res.set('Access-Control-Allow-Headers', 'Content-Type,x-api-key');
    //     res.set('Access-Control-Allow-Origin', 'http://localhost:1234');
    //     res.set('Access-Control-Allow-Methods', 'PUT,PATCH,DELETE');
    //     res.set('Access-Control-Allow-Credentials', 'true');
    //     return res.json({})
    // },
    findAll(req: Request, res: Response) {
        // res.set('Access-Control-Allow-Origin', 'http://localhost:1234');
        return res.json({})
    },

    update(req: Request, res: Response) {
        // console.log(req.headers);
        // res.set('Access-Control-Allow-Origin', 'http://localhost:1234');
        // res.set('Access-Control-Allow-Credentials', 'true');
        // res.set('Set-Cookie', 'refreshToken=ahihi;path=/;max-age=3600;httponly');
        return res.json({})
    }

}