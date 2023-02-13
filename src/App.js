import './App.css';
import whiskyimg from './whiskybottle.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>D'Stilled</h1>
        <h5>Making Whisky-Making Simpler Than Making Whisky</h5>
        <h3>(made the right way)</h3>
        <p>
          Welcome to the D'Stillary Homepage! Grab a glass, take a seat, and ease back into that chair, and have a seat. You can relax, sit down. Drink up and take a pick from our 4 delicious and scrumptioius options: ... Actually, options to come. We're gonna have options soon. This is one of the bottles we put the whisky in:
        </p>
        <img src={whiskyimg} alt="whiskyimg"/>
      </header>
    </div>
  );
}

export default App;
