const mongoose = require('mongoose')
const router = require('express').Router();
const Organization = require('../models/organization.model');

router.route('/').get((req, res) => {
    Organization.find()
        .then(orgs => res.json(orgs))
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;