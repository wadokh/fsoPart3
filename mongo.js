const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://arihantmapsi:${password}@cluster0.syjfpje.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

if (process.argv.length==3){
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

// const note = new Note({
//   content: 'Afraid not',
//   important: false,
// })

// note.save().then(result => {
//   console.log(result);
//   console.log('note saved!')
//   mongoose.connection.close()
// })

Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
}

if(process.argv.length==5){
    mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
})

person.save().then(result => {
  console.log(result);
  console.log('number saved!')
  mongoose.connection.close()
})
}