import Hello from './components/Hello';

function App() {
  {/* Passing array t component */}
  const nickNames = ['Deluxe', 'Sam'];
  
  return (
    <div className="App">
      <Hello nickNames={nickNames} />
    </div>
  )
}

export default App
