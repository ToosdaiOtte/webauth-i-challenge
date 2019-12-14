const router = require('express').Router();
const authRequired = require('../auth/auth-require-middleware.js');

const Users = require('./users-model.js');

router.get('/', authRequired, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.send(err)
        })
});

module.exports = router;