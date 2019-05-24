const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const me = new User({
//     name: "  Mike  ",
//     email: ' MYEMAIL@MEAD.IO ',
//     password: 'phone092!'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// const task = new Task({
//     description: 'Learn the Mongoose library',
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })