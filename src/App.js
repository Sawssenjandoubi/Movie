import './App.css';
import Movielist from './Components/Movielist/Movielist';
import Navbarr from './Components/Navbar/Navbar';
import {data} from './data';
import React,{useState} from 'react'
import BasicModal from './Components/Modal/Modal';

function App() {
 
  const[movies,setMovies]=useState(data)
  const[search,setSearch]=useState("")
  const[rate,setRate]=useState(0)
  return (
    <div className="App">
     
      <Navbarr setSearch={setSearch} setRate={setRate} rate={rate} />
      <section>
        <div className='BasicModal'>
        <BasicModal movies={movies} setMovies={setMovies}/>
        </div>
      <Movielist movies={movies} search={search} rate={rate}/>
      
      </section>
      </div>
  );
}

export default App;
