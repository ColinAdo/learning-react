import Hello from './components/Hello';

function App() {
  {/* Passing array t component */}
  // const nickNames = ['Deluxe', 'Sam'];

  // Pasing object props to components
  const person = {
    name: 'John',
    age: 36,
    phoneNumbers: ['070712222', '07828921892']
  }
  
  return (
    <div className="App">
      {/* <Hello nickNames={nickNames} /> */}
      <Hello person={person} />
    </div>
  )
}

export default App
