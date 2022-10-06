import Navigation from './components/navbar';
import React, {useEffect} from 'react'
import './styles/App.scss';
import Cards from './containers/cards';
import Sidebar from './components/sidebar';

function App() {
  
  return (
    <div className="App">
      <Navigation />
      <main>
        <div className='container'>
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
