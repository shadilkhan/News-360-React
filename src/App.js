
import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';

const App=()=>{
 const pageSize=6;
 const apiKey=process.env.REACT_APP_NEWS_API
 const [progress, setProgress] = useState(0);
    return (
      <div>
          <Router>
          <NavBar/>
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
          />
          <Switch>
          <Route exact path="/"><News apiKey={apiKey} setProgress ={setProgress} key="general" pageSize={pageSize} category="general" country="in"></News></Route>
          <Route exact path="/business"><News apiKey={apiKey}  setProgress ={setProgress} key="business" pageSize={pageSize} category="business" country="in"></News></Route>
          <Route exact path="/entertainment"><News apiKey={apiKey}  setProgress ={setProgress} key="entertainment" pageSize={pageSize} category="entertainment" country="in"></News></Route>
          <Route exact path="/general"><News apiKey={apiKey}  setProgress ={setProgress} key="general" pageSize={pageSize} category="general" country="in"></News></Route>
          <Route exact path="/science"><News apiKey={apiKey}  setProgress ={setProgress} key="science" pageSize={pageSize} category="science" country="in"></News></Route>
          <Route exact path="/sports"><News apiKey={apiKey}  setProgress ={setProgress} key="sports" pageSize={pageSize} category="sports" country="in"></News></Route>
          <Route exact path="/technology"><News apiKey={apiKey}  setProgress ={setProgress} key="technology" pageSize={pageSize} category="technology" country="in"></News></Route>
          <Route exact path="/health"><News apiKey={apiKey}  setProgress ={setProgress} key="health" pageSize={pageSize} category="health" country="in"></News></Route>
          </Switch>
          </Router>
      </div>
      
    )
}
export default App

