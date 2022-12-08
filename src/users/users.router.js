//? Importamos router
const router = require('express').Router()
const servicesUsers = require('./users.services')
const passportJWT = require('../middleware/auth.middleware')



router.get("/", passportJWT.authenticate('jwt', {session: false}),  servicesUsers.getAllUsers)
router.post("/", servicesUsers.postUsers)

router.get("/me", passportJWT.authenticate('jwt', {session: false}), servicesUsers.getMyUser)
router.patch("/me", passportJWT.authenticate('jwt', {session: false}), servicesUsers.patchMyUser)
router.delete("/me", passportJWT.authenticate('jwt', {session: false}), servicesUsers.deleteMyUsers)

router.get("/:id", servicesUsers.getUsersById)
router.patch("/:id", servicesUsers.patchUser)
router.delete("/:id", servicesUsers.deleteUsers)





module.exports = router