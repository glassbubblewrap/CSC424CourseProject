const mongoose = require('mongoose')
const router = require('express').Router();
const User = require('../models/user.model');

router.route('/').get((req, res) => {

    console.log('router connected')
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;