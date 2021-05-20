import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}

export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (usuario) {
        res.json(usuario);
    } else {
        res.json({
            mgs: 'Usuario no encontrado'
        })
    }

}

export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const existeEmial = await Usuario.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmial) {
            return res.json({
                mgs: 'Ya existe corre ' + body.email
            });
        }
        const usuario = Usuario.build(body);
        // const usuario = new Usuario(body);
        await usuario.save();
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.json({
            mgs: 'Hable con el administrado',
        });

    }

}

export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.json({
                mgs: 'No existe usuario ' + body.nombre
            });
        }

        await usuario.update(body);

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.json({
            mgs: 'Hable con el administrado',
        });

    }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
        return res.json({
            mgs: 'No existe usuario '
        });
    }

    // await usuario.destroy(); ELIMINAR USUARIO DE LA BASE DE DATOS
    await usuario.update({ estado: false });

    res.json({
        mgs: 'Usuario eliminado'
    });
}