/* eslint-disable  */
import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {

  const [input,setInput] = useState("");

  const onSearch = ()=>{
    let url = `https://api.tvmaze.com/search/shows?q=${input}`;
    fetch(url).then((response)=>{
      console.log(response)
      return response.json()
    }).then(result => {
      console.log(result)
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




  // onKeyDown event is initialted when ever the any key on the keyboard is pressed

  return (
    
      <MainPageLayout>
        <input type="text" onChange={onInputChange} value={input} onKeyDown={onKeyDownfunc} /> 
        <button type='button' onClick={onSearch}>Search</button>
      </MainPageLayout>
  )
}

export default Home