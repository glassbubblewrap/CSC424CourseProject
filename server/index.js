const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient;
const app = express()
const PORT = 4000
const usersRouter = require('./routes/users');
const orgRouter = require('./routes/organizations')

require('dotenv').config();




app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())


app.use(session({
    secret:'lafjekjfo39rt0t4-))_R03i9rt4#REW"QR#', // value here can be anything
    resave: true,
    saveUninitialized: true
}))


const uri = "mongodb+srv://admin:USM123@cluster0.wl7k0.mongodb.net/CSCProjectData?retryWrites=true&w=majority";

const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
    const collection = client.db("test").collection("devices");
    client.close();
})


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

app.post('/signupSubmit',(req, res)=>{


    //{name, email, password, confirmPassword, error}
    //if no errors set req.session.loggedin = true and req.session.userId = the new id of the user

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password


    const newUser = new User({

        name, 
        email,
        password,
    })

    newUser.save()
    .then(()=> res.json('User Added to database'))


    console.log('signup request received')
    console.log(req.body)
    res.send({status: 'done'})

})
app.post('/registerOrgSubmit', (req,res)=> {


    //Insert this data to the database to create a new club
    //{name, location, About}
    console.log('register organization request received')
    console.log(req.body)
    res.send({status: 'done'})
})

app.get('/checkIfloggedIn', (req, res)=>{

    //send the session data res.send({loggedIn: req.session.loggedin}, user_id: req.session.user_id)

    res.send({loggedin: true})
     
 
 })





app.listen(PORT, () => console.log(`Server running on port ${PORT}`))