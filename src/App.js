import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import PlayerComponent from './components/Player/PlayerComponent';
import VideosListComponent from './components/VideosList/VideosListComponent';

function App() {
  document.title = "SonyLIV - Watch Indian TV Shows, Movies, Sports, Live Cricket Matches, Web Originals.";
  return (
    <div className="App">
      <HeaderComponent/>
      <PlayerComponent/>
      <VideosListComponent/>
    </div>
  );
}

export default App;
