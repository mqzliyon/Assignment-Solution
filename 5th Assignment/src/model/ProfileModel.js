const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    FirstName: {
        type: String,
        require: true
    },
    LastName: {
        type: String,
        require: true
    },
    EmailAddress: {
      type: String,
      require: true,
      unique: true
    },
    UserName: {
        type: String,
        require: true,
        unique: true
    },
    Password: {
        type: String,
        require: true
    },
    Phone: {
        type: String,
        require: true,
        default: '+880'
    },
    Address: {
        type: String,
        require: true,
        default: 'BD'
    },
    Photo: {
        type: String,
        require: true,
        default: 'https://stc.com.bd/wp-content/uploads/2022/01/demo-sm-men-pic-1.jpg'
    }

},{versionKey: false,timestamps: true});

const ProfileModel = mongoose.model('UserProfiles',DataSchema);

module.exports = {ProfileModel};