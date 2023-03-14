import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList.js';
// THE IMPORT FOR ROBOTS WAS FROM BEFORE GOING TO THE LIST ON THE WEB.
// import { robots } from './robots.js'; 
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

function App() {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users => {setRobots(users)})
            .catch(err => {setError(err)})
            //console.log(robots, searchfield)
    },[])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    if (!robots.length) {  
        return <h1 className="f1 tc">LOADING</h1>
    } 
    if (error) {
        return <h1 className="f1 tc">OOPS, THERE WAS AN ERROR. PLEASE TRY AGAIN.</h1>    
    } else {
        return (
            <div className='tc'>
                <h1 className="f1">ROBO FRIENDS</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }         
}

export default App;
