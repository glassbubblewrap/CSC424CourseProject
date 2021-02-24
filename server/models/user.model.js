const mongoose = require('mongoose');
const Organization = require('./organization.model')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    bio:{
        type: String,
        trim: true
    },
    OrganizationsJoined:[

        {

           org_id:{ 
               type: Schema.Types.ObjectId, 
               ref: Organization,
            }
        }
    ]
})

const User = mongoose.model('User', userSchema);

module.exports = User;