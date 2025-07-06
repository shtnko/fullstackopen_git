import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/Persons'
import PersonForm from './components/PersonForm'
import PersonsMap from './components/PersonsMap'
import Notification from './components/Notification'

const App = () => {
    const [newName, setNewName] = useState("blank name")
    const [newNumber, setNewNumber] = useState("blank number")
    const [persons, setPersons] = useState([]) 
    const [notificationMessage, setNotificationMessage] = useState('Waiting for user actions')
    const handleNameChange = (event) => {
      setNewName(event.target.value)
  }
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
  }

  
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
console.log('render', persons.length, 'persons')

const handleRemovePerson = (id) => {
  const updatedPersons = persons.filter(person => person.id !== id)
  confirm(`Are you sure you want to remove person and number?`)
    personService
      .removePerson(id)
      .then(returnedPerson => {
        setPersons(updatedPersons)
        setNotificationMessage(
          `Person '${removed.name}' with number '${removed.number}'  removed from database`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })
      .catch(error => {
        const removed = persons.find(person => person.id === id)
        setNotificationMessage(
          `Person '${removed.name}' with number '${removed.number}'  removed from database`
        )
      })
console.log('Person with id:', id, 'was deleted')
   
}

const addValues = (event) => {
    event.preventDefault()
    console.log('click', event.target)
    console.log(newName, newNumber)
      //if newname in the form is empty value - pop the notification. 
      //added this because it seemed right to do
        if (!newName) {
          alert(' Name is empty ')
          return
    }
    // if person is in the array of names - pop the notification
        if (persons.findIndex((n) => n.name == newName) != -1) {
          alert(`${newName} is already added to phonebook`)
        return
    }
      const personObject = {
        name: newName, 
        number: newNumber,
        id: Math.floor(Math.random() * 100),
    }
    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(personObject))
        setNotificationMessage(
          `Person '${response.data.name}' with number '${response.data.number}' added to database`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
        setNewName("")
        setNewNumber("")
      })

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <PersonForm 
        addValues={addValues}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}  
        handleNumberChange={handleNumberChange}
      />
      
      <h2>Persons/Numbers</h2>
      {/*using .map function to attach persons name/number to the persons array using id as a unique key*/}
        <PersonsMap
        persons={persons}
        removePerson={handleRemovePerson}
        />
    </div>
  )
}

export default App