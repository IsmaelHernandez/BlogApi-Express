//? Importamos router
const router = require('express').Router()

const servicesUsers = require('./users.services')

router.get("/", servicesUsers.getAllUsers)
router.get("/:id", servicesUsers.getUsersById)
router.post("/", servicesUsers.postUsers)




module.exports = router