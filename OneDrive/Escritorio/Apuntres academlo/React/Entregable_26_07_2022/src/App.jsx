import { useState } from 'react'
import './App.css'
import doc from './json/doc.json'
import color from './utils/color'
import QuoteCards  from './components/QuoteCards'
function App() {



  console.log (color);
  const getRandomNumber = array => { 

  const numberRandom= Math.round(Math.random() *10);

 return array[numberRandom]}

 let randomValue= getRandomNumber(doc);
 let  randomColor= getRandomNumber(color);
 let  [userRandom,setUserRandom]=useState(randomValue);
   let [userColor,setUserColor]=useState(randomColor);

 const objectBackground={
    backgroundColor:userColor

 }

 const objectColorQuote={
  color:userColor

}




 const getRandomElement=()=> {

 userRandom=getRandomNumber(doc);
 userColor=getRandomNumber(color);
 setUserRandom(userRandom);
 setUserColor(userColor);

 }

  
  return (
    <div className="App" style={objectBackground}>


      <QuoteCards userRandom={userRandom} userColor={userColor}  getRandomElement={getRandomElement}/>


      

    



     
      


    </div>
  )
}

export default App
