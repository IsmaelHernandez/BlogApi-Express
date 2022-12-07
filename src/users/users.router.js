//? Importamos router
const router = require('express').Router()
const servicesUsers = require('./users.services')
const passportJWT = require('../middleware/auth.middleware')



router.get("/", passportJWT.authenticate('jwt', {session: false}),  servicesUsers.getAllUsers)
router.get("/:id", servicesUsers.getUsersById)
router.post("/", servicesUsers.postUsers)
router.get("/me", passportJWT.authenticate('jwt', {session: false}), servicesUsers.getMyUser)




module.exports = router