import './App.css';
import Header from './components/Header';
import IntroductionSection from './components/Introduction';
import AboutSection from './components/About';
import ProjectSection from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     
      <IntroductionSection/>
      <AboutSection/>
      <ProjectSection/>
      <Contact/>
    </div>
  );
}

export default App;
