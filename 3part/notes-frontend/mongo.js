const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.9yaigwm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

//mongodb+srv://fullstack:<db_password>@cluster0.9yaigwm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.set('strictQuery',false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  Name: String,
  Number: String,
})

const Person = mongoose.model('Person', personSchema)

// const note = new Note({
//   content: 'test false',
//   important: false,
// })

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

Person.find({}).then(result => {
  result.forEach(person => {
    console.log(person)
  })
  mongoose.connection.close()
})