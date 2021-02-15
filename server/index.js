const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 4000



app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())


app.post('/loginSubmit', (req, res)=>{

    //Check the database for the email 
    // if that email exists make sure the entered password 
    //is the same as the password in the database
    //{email, password}
    //if those checks don't pass send a response of format {error: 'string'}
    console.log('got request')
    console.log(req.body)

})

app.post('/signupSubmit',(req, res)=>{


    //{name, email, password, confirmPassword, error}
    console.log('signup request received')
    console.log(req.body)
    res.send({status: 'done'})

})
app.post('registerOrgSubmit', (req,res)=> {


    //Insert this data to the database to create a new club
    //{name, location, About}
    console.log('register organization request received')
    console.log(req.body)
    res.send({status: 'done'})
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))