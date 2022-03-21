/* eslint-disable  */
import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from '../misc/config.js'

const Home = () => {

  const [input,setInput] = useState("");
  const [results,setResults] = useState(null)

  const onSearch = ()=>{
    apiGet(`search/shows?q=${input}`).then(result =>{
      setResults(result)
    })
    
  }

  const onInputChange = (ev)=>{
    setInput(ev.target.value)
  }

  const onKeyDownfunc = (ev)=>{
    // enter key code is 13 so that we are checking wheather the pressed number is 13 or not
    if(ev.keyCode === 13){
      onSearch();
    }
  }


  const renderResults = () => {
    if(results && results.length===0){
      return (<div>NO results</div>);
    }

    if(results && results.length>0){
      return (  
      <div>
        {results.map((item)=>{
          return(<div key={item.show.id}>{item.show.name}</div>);
        })
        }
      </div>);
    }
    return null;
  }

  // onKeyDown event is initialted when ever the any key on the keyboard is pressed

  return (
    
      <MainPageLayout>
        <input type="text" onChange={onInputChange} value={input} onKeyDown={onKeyDownfunc} /> 
        <button type='button' onClick={onSearch}>Search</button>
        <div>
        {renderResults()}
        </div>
        
      </MainPageLayout>
  )
}

export default Home