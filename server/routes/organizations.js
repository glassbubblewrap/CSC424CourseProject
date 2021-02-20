const router = require('express').Router();
let Organization = require('../models/organization.model');

router.route('/').get((req, res) => {
    Organization.find()
        .then(orgs => res.json(orgs))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;

    const newUser = new User({name});

    newUser.save()
        .then(() => res.json('Org added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;