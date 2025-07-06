const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
    console.log(parts[0].name, parts[0].exercises, parts[1].name, parts[1].exercises, parts[2].name, parts[2].exercises)
  
  
    return (
      <div>
        <h1>{course}</h1>
        <p> 
          {parts[0].name} {parts[0].exercises}
          <br />
          {parts[1].name} {parts[1].exercises}
          <br />
          {parts[2].name} {parts[2].exercises}
        </p>
      </div>
    )
  }
  export default App