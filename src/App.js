import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import About from './Components/About';
import Contacts from './Components/Contacts';


function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Nav/>
        <Main/>
        <About/>
        <Experience/>
        <Projects/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
