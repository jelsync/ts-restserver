"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    res.json({
        mgs: 'Usuarios'
    });
};
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        mgs: 'Usuarios'
    });
};
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        mgs: 'postUsuario',
        body
    });
};
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        mgs: 'putUsuario',
        body
    });
};
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        mgs: 'deleteUsuarios',
        id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuario.js.map