const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient;
const app = express()
const PORT = 4000
const usersRouter = require('./routes/users');
const orgRouter = require('./routes/organizations')
const Organization = require('./models/organization.model')
const User = require('./models/user.model')

require('dotenv').config();




app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())

app.use(orgRouter)
app.use(usersRouter)


app.use(session({
    secret:'lafjekjfo39rt0t4-))_R03i9rt4#REW"QR#', // value here can be anything
    resave: true,
    saveUninitialized: true
}))


const url = "mongodb+srv://admin:USM123@cluster0.wl7k0.mongodb.net/CSCProjectDatabase?retryWrites=true&w=majority";

//  const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
// client.connect(err => {
//     console.log('connection Established')
//     if(err){
//         console.log('Error connecting to Database')
//     }
// })

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on('connected',()=> console.log('connected to MongoDB database'))
mongoose.connection.on('error', ()=> console.log('Error Connecting to Datbase'))




app.post('/loginSubmit', (req, res)=>{

    //Check the database for the email 
    // if that email exists make sure the entered password 
    //is the same as the password in the database
    //{email, password}
    //if those checks don't pass send a response of format {error: 'string'}
    // I am not sure how to keep track of if someone is logged in or not 
    // req.session.loggedin = true
    //req.session.userId = the id of the user that logged in

    // make sure that the email exist in the database
    // compare the password field of the request to the password in the database
    //
    console.log('request submitted')

    req.session.loggedin = true
    req.session.userId = 12345

    res.send({loggedin : true, userId: 12345})

})
app.post('/signupSubmit', (req, res)=>{


    //{name, email, password, confirmPassword, error}
    //if no errors set req.session.loggedin = true and req.session.userId = the new id of the user

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    
        const newUser = new User({

            _id: mongoose.Types.ObjectId(),
            name: name, 
            email: email,
            password: password,
        })

        console.log("The request has been submitted")
        console.log(name + ' ' + email)
        newUser.save()
        .then(()=> res.json('User Added to database'))

})
app.post('/registerOrgSubmit', (req,res)=> {

    //Insert this data to the database to create a new club
    //{name, location, about}
    const name = req.body.name
    const location = req.body.location
    const about = req.body.about

    console.log(name +' ' + location + ' ' + about)

    const newOrg = new Organization({

        _id: mongoose.Types.ObjectId(),
        name: name,
        location: location,
        about: about
    })
    console.log(newOrg)
    newOrg.save()
    .then(()=>res.send(JSON.stringify({success: true})))
    .catch(err => res.send(JSON.stringify({error: err})))
})

app.get('/getBrowseOrgs', (req,res) => {

    console.log('getting Orgs')

    Organization.find({},(err, orgs)=>{

    })
})





app.listen(PORT, () => console.log(`Server running on port ${PORT}`))