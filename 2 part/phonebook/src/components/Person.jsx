
const Person = ({ person, removePerson }) => {
  return <li> Name: {person.name}, Number: {person.number} <button onClick={removePerson} >remove</button> </li>}

export default Person