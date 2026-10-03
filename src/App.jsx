const App = () => {
  const course = {
    name: 'Industry Elective 1',
    parts: [
      {
        name: 'Information Management 2',
        units: 3
      },
      {
        name: 'Data Analytics 1',
        units: 3
      },
      {
        name: 'Project Management for IT',
        units: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer
        fullName="Hanzen Desoloc Lines"
        courseCode="CSIT340"
        section="G7"
      />
    </div>
  )
}