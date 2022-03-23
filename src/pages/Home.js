/* eslint-disable  */
import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from '../misc/config.js'
import ShowGrid from "../components/show/ShowGrid"
import ActorGrid from "../components/actor/ActorGrid"
import { useLastQuery } from '../misc/custom-hooks'

const Home = () => {

  const [input,setInput] = useLastQuery();
  const [results,setResults] = useState(null)
  const [searchOption,setSearchOption] = useState("shows")
  const isShowsSearch = searchOption==="shows"

  const onSearch = ()=>{
    apiGet(`search/${isShowsSearch?'shows':'people'}?q=${input}`).then(result =>{
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


  const onRadioChange = ((ev) => {
    setSearchOption(ev.target.value);
  })
  console.log(searchOption)
  const renderResults = () => {
    if(results && results.length===0){
      return (<div>NO results</div>);
    }

    if(results && results.length>0){
        return(results[0].show ?<ShowGrid data={results} />:<ActorGrid data = {results}/>);
    }
    return null;
  }

  // onKeyDown event is initialted when ever the any key on the keyboard is pressed

  return (
    
      <MainPageLayout>
        <input type="text" onChange={onInputChange} value={input} onKeyDown={onKeyDownfunc} placeholder="Search for something" /> 

        <div>
          <label htmlFor='shows-search'>
            Shows
            <input id='shows-search' type="radio" value="shows" checked={isShowsSearch}  onChange={onRadioChange}/>
          </label>
          
          <label htmlFor='actors-search'>
            Actors
            <input id='actors-search' type="radio" value="people" checked={!isShowsSearch} onChange={onRadioChange}/>
          </label>
          
        </div>

        <button type='button' onClick={onSearch}>Search</button>
        <div>
        {renderResults()}
        </div>
        
      </MainPageLayout>
  )
}

export default Home