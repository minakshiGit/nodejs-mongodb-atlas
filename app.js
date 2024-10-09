//const express = require('express')
const app = require('express')()
const http = require('http').Server(app)
const mongoose = require('mongoose')
const db_url ="<mongodb_url>"
mongoose.connect(db_url)
.then(() => {
    console.info('connect successfully')
})
.catch(() => {
    console.error('connection error');
});
const User = require('./models/userModel')
console.log(User)

// const createAsync = async() => {
//     await User.create({
//         name: 'minakshid',
//         email: 'minakshidutta@gmail.com'
//     });    
// }

// createAsync();
async function insert() {
    await User.create({
        name: 'minakshid22',
        email: 'minakshidutt22@gmail.com'
    }); 
}
insert()
http.listen(3000, function () {
    console.log('server is running')
})
