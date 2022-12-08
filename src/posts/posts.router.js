const router = require('express').Router()
const servicesPosts = require('./posts.services')
const passportJWT = require('../middleware/auth.middleware')

router.route("/")
    .get(servicesPosts.getAllPosts)
    .post(passportJWT.authenticate('jwt', {session: false}), servicesPosts.createNewPosts)

module.exports = router