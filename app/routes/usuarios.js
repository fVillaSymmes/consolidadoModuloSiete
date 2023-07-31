const router = require('express').Router();
const { findAll, findUserById, updateUserById, deleteUserById } = require('../controllers/user.controller')

// • Listar los usuarios con sus Bootcamp.
router.get('/', async (req, res) => {
    const usuarios = await findAll()
    if(!usuarios) {
        res.status(404).send('No fue posible devolver la lista de usuarios')
    } else {
    res.status(200).json({Usuarios: usuarios})
    }
})

// • Consultar un usuario por id, incluyendo los Bootcamp.
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const usuarioSolicitado = await findUserById(id);
    if(!usuarioSolicitado) {
        res.status(404).send('No existe ningún usuario bajo ese id.')
    } else {
        res.status(200).json({Usuario: usuarioSolicitado})
    }
})

// Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro Sánchez
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { firstName, lastName } = req.body;
    const usuarioModificado = await updateUserById(id, firstName, lastName)
    if(!usuarioModificado) {
        res.status(404).send('No fue posible encontrar y/o modificar el usuario solicitado')
    } else {
        const usuarioYaModificado = await findUserById(id);
        res.status(200).json({usuarioModificado: usuarioYaModificado})
    }
})
// Eliminar un usuario por id; por ejemplo: el usuario con id=1.
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const usuarioEliminado = await deleteUserById(id)
    if(!usuarioEliminado) {
        res.status(404).json({message: `No existe ningún usuario bajo el id:${id}`})
    } else {
        res.status(200).send(`El usuario id:${id} ha sido eliminado satisfactoriamente`)
    }
})

module.exports = router;