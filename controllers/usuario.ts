import { Request, Response } from "express";

export const getUsuarios = (req: Request, res: Response) => {
    res.json({
        mgs: 'Usuarios'
    });
}

export const getUsuario = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        mgs: 'Usuarios',
        id
    });
}

export const postUsuario = (req: Request, res: Response) => {
    const { body } = req;

    res.json({
        mgs: 'postUsuario',
        body
    });
}

export const putUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    res.json({
        mgs: 'putUsuario',
        body,
        id
    });
}

export const deleteUsuario = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        mgs: 'deleteUsuarios',
        id
    });
}