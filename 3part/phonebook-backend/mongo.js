const mongoose = require('mongoose')

if (!password) {
  console.log('you must add password as first argument')
  process.exit(1)
} 

const password = process.argv[2]

const baseUrl = `mongodb+srv://fullstack:${password}@cluster0.9yaigwm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.set('strictQuery', false)
mongoose.connect(baseUrl)

const personSchema = new mongoose.Schema({

  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

Person.find({}).then(result => {
  result.forEach(person => {
    console.log(person)
  })
  mongoose.connection.close()
})
