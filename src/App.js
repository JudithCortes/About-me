import logo from './logo.svg';
import './App.css';
import Profile from "./components/Profile";
import Learn from "./components/Learn";
import Expectations from "./components/Expectations";
import Hobbies from "./components/Hobbies";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="App">
      <main className="App-main">
      <h1>Judith</h1>
        <div className="container-box">
              <Profile/>  
              <Learn/>
              <Expectations/>
              <Hobbies/>
              <Interests/>
        </div> 
      </main>
    </div>
  );
}

export default App;
