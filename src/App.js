import './App.css';
import IntroductionSection from './components/Introduction';
import AboutSection from './components/About';
import ProjectSection from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App flex-column">
     
      <IntroductionSection/>
      <AboutSection/>
      <ProjectSection/>
      <Contact/>
    </div>
  );
}

export default App;
