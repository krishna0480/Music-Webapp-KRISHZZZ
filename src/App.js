import './App.css';
import AudioList from './components/AudioList';
import Left from './components/Left';
import MainContent from './components/MainContent';
import Right from './components/Right';

function App() {
  return (
    <div className="App">
  
      <Left />
      <MainContent />
      <Right />
     

      <div className="backgroundImage"></div>
    </div>
  );
}

export default App;
