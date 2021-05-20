import { Request, Response } from "express";

export const getUsuarios = (req: Request, res: Response) => {
    res.json({
        mgs: 'Usuarios'
    });
}

export const getUsuario = (req: Request, res: Response) => {
    const {id} = req.params;

    res.json({
        mgs: 'Usuarios'
    });
}

export const postUsuario = (req: Request, res: Response) => {
    const {body} = req;

    res.json({
        mgs: 'postUsuario',
        body
    });
}

export const putUsuario = (req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req;

    res.json({
        mgs: 'putUsuario',
        body
    });
}

export const deleteUsuario = (req: Request, res: Response) => {
    const {id} = req.params;

    res.json({
        mgs: 'deleteUsuarios',
        id
    });
}