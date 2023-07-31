const router = require('express').Router();
const { findAll, findById } = require('../controllers/bootcamp.controller')

// • Listar todos los Bootcamp con sus usuarios.
router.get('/', async (req, res) => {
    const bootcamps = await findAll()
    if(!bootcamps) {
        res.status(404).send('No fue posible encontrar los bootcamps')
    } else {
    res.status(200).json({bootcamps: bootcamps})
    }
})
// • Consultando el Bootcamp por id, incluyendo los usuarios.
router.get('/:id', async (req, res) => {
    const id = req.params.id

    const bootcampPorId = await findById(id);
    if(!bootcampPorId) {
        res.status(404).send('No fue posible encontrar un bootcamp con ese id.')
    } else {
        res.status(200).json({bootcamp: bootcampPorId})
    }

})



module.exports = router;