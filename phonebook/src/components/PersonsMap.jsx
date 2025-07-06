import Person from './Person'
    
     const PersonsMap = ({ persons, removePerson }) => {
  return <ul>{persons.map(person => 
      <Person 
      key={person.id} 
      person={person} 
      removePerson={() => removePerson(person.id)}
      />
      )}</ul>
} 
      
      

  export default PersonsMap