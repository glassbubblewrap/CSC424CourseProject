const express = require('express')
const session = require('express-session')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const validator = require('express-validator')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const PORT = 4000
const usersRouter = require('./routes/users');
const orgRouter = require('./routes/organizations')
const Organization = require('./models/organization.model')
const User = require('./models/user.model')
const { check } = require('express-validator')



//require('dotenv').config();

app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())

app.use(orgRouter)
app.use(usersRouter)


// app.use(session({
//     secret:'lafjekjfo39rt0t4-))_R03i9rt4#REW"QR#', // value here can be anything
//     resave: true,
//     saveUninitialized: true
// }))


const url = "mongodb+srv://admin:USM123@cluster0.wl7k0.mongodb.net/CSCProjectDatabase?retryWrites=true&w=majority";


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on('error', ()=> console.log('Error Connecting to Datbase'))
mongoose.connection.on('disconnect', ()=> {
    console.log('Disconnected from Server')
    return
})
mongoose.connection.on('connected', ()=> {


    // app.use('/user', usersRouter)
    // app.use('/orgaization', orgRouter)

    app.get('/checkIfloggedIn', (req, res)=>{

       
        if(req.cookies.currentUser){
            res.send({user: req.cookies.currentUser})
        }
        else{
          
            res.send({loggedIn: false})
        }
    })
    app.get('/clearCookie', (req,res)=>{

        res.clearCookie('currentUser')
        return res.sendStatus(200)
    })

    app.post('/loginSubmit',[ 
        
        validator.check('email').isEmail().normalizeEmail().trim().escape(),
        validator.check('password').isLength({min: 8}).trim().escape()
        ],
        (req, res)=>{
    
        //Check the database for the email 
        // if that email exists make sure the entered password 
        //is the same as the password in the database
        //{email, password}
        //if those checks don't pass send a response of format {error: 'string'}
        // I am not sure how to keep track of if someone is logged in or not 

        // make sure that the email exist in the database
        // compare the password field of the request to the password in the database
        //
    
        //cookies
    
        let email = req.body.email
        let password = req.body.password

        
        User.findOne({email: email}, (err, user)=>{

            if(!user){
                res.send({error: 'Invalid Email or Password'})
            }else{

                let match = bcrypt.compareSync(password, user.password)
                if(match){
                    
                    res.cookie('currentUser', user.email,{
                        maxAge: 60*60*100,
                        httpOnly: true,
                        //secure: true,
                        sameSite: true,

                    }).send({success: true})

                }
                else{
                    res.send({error: 'Invalid Email or Password' })
                }
            }


        })
    
    
        //res.send({loggedin : true, userId: 12345})
    
    })
    app.post('/signupSubmit',[
    
        check('name').isLength({min: 3}).trim().escape(),
        check('email').isEmail().normalizeEmail().trim().escape(),
        check('password').isLength({min: 8}).trim().escape()
    ],
    (req, res)=>{
    
        //{name, email, password, confirmPassword, error}
        //if no errors set req.session.loggedin = true and req.session.userId = the new id of the user
        let name = req.body.name
        let email = req.body.email
        let password = req.body.password
        let SALT = 10

        
        User.findOne({email: email}, (err,user)=>{

            
            if(user){
                res.send({error: 'This email is already regisered'})
            }else{

                bcrypt.genSalt(SALT, (err, salt)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    bcrypt.hash(password, salt,(err,hash)=>{

                        if(err){
                            console.log(err)
                            return
                        }
                        const newUser = new User({

                            _id: mongoose.Types.ObjectId(),
                            name: name,
                            email: email,
                            password: hash

                        })
                        newUser.save((err, response)=>{
                            if(err){
                                console.log(err)
                                return
                            }
                            console.log('User added to Database')
                            res.cookie('currentUser', newUser.email,{
                                maxAge: 60*60*100,
                                httpOnly: true,
                                //secure: true,
                                sameSite: true,

                            }).send({success: true})
                            
                        })
                    })
                })
            }
        })
       
    })
    
    
    app.post('/registerOrgSubmit', [
        check('name').isLength({min: 3}).trim().escape().withMessage('Name must be at least 3 characters long'),
        check('location').trim().escape(),
        check('about').trim().escape()
    ],
    (req,res)=> {

        //Insert this data to the database to create a new club
        //{name, location, about}
        const name = req.body.name
        const location = req.body.location
        const about = req.body.about
    
       
    
        const newOrg = new Organization({
    
            _id: mongoose.Types.ObjectId(),
            name: name,
            location: location,
            about: about,
            members:[{user_email: req.cookies.currentUser, status: 'Leader'}]
        })
        
        
        newOrg.save()
        .then(User.findOneAndUpdate({email: req.cookies.currentUser}, { "$push": {OrganizationsJoined: {org_id: newOrg._id}}}, 
        (err)=> {
            if(err){
                console.log(err)
                res.send({error: 'Could not add organization leader'})
            }
        }))
        .then(()=>res.send({success: true}))
        .catch(err => { 
            console.log(err)
            res.send({error: 'There has been a server error'})
            
        })
        //log error to file and send general error
    })
    
    app.get('/getBrowseOrgs', (req,res) => {

        const query = Organization.find({}).select('name location') 
    
    
        query.exec((err,result)=>{
            if(err){
                console.log(err)
            }else{
                delete result._id
                res.send(result)
            }
        })
    })

    app.get('/getUserOrgs', (req, res)=>{

        

        const query = User.findOne({email: req.cookies.currentUser}).select('OrganizationsJoined') 
        
        query.exec((err,result)=>{
            if(err){
                console.log(err)
            }else{

                let userOrgs = []
                result.OrganizationsJoined.forEach(element => {

                    
                    const FindOrg =  Organization.findOne({_id: element.org_id}).select('name location ')
                    FindOrg.exec((err, data)=>{

                        if(err){
                            console.log(err)
                        }else{
                            userOrgs.push(data)
                        }

                    })
                

                    
                });
                res.send(userOrgs)
            }
        
        })
    })
    app.post('/getOrganizationData',[
        check('id').trim().escape()
    ], (req,res)=>{

        const org_id = req.body.id
        Organization.findOne({_id: org_id}, (err, org)=>{

            if(err){
                console.log(err)
                res.send({error: 'Could not find your organization'})
            }else{
                res.send(org)
            }
        })
    })
    app.post('/onAnnouncementSubmit', [
        
        check('title').trim().escape(),
        check('content').trim().escape()
    ],
    (req,res) => {

        

        Organization.findByIdAndUpdate({_id: req.body.id},
        { "$push": {announcements: {title: req.body.title, content: req.body.content}}}, (err) => {
            if (err){
                console.log(err);
                res.send({error: "Could not add announcement :("})
            }else{
                res.send({success: "Announcement added successfully :)"})
            }
        })
        
    })

    app.post('/onEventSubmit', [
        check('name').trim().escape(),
        check('location').trim().escape(),
        check('date').trim().escape(),
        check('time').trim().escape(),
        check('description').trim().escape()
    ],
    (req, res) => {
        Organization.findByIdAndUpdate({_id: req.body.id},{ 
            "$push": {
                events: {
                    name: req.body.name, 
                    address: req.body.address, 
                    date: req.body.date, 
                    time: req.body.time,
                    description: req.body.description }}}, (err) => {
                        if(err){
                            console.log(err);
                            res.send({error: "Could not add event"})
                        }
                        else{
                            res.send({success: "Event added successfully!"})
                        }
                    })
    })

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    console.log('connected to MongoDB database')
})
