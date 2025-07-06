const Header = (props) => <h1>{props.course}</h1>

//Content → перебирає parts і для кожного створює <Part part={part} />
const Content = (props) => (
  <div>
    {props.parts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </div>
)

//Part → відображає дані однієї частини
const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <p>Total number of exercises {props.total}</p>


//Course → передає масив parts у Content
const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total total={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
  </div>
)

export default Course