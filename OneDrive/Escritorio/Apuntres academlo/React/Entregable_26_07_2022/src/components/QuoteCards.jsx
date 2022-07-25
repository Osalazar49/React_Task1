import React from 'react'


const QuoteCards=({userRandom,userColor,getRandomElement})=>{
    
    console.log(userRandom);
    console.log(userColor);

    const objectStyle={

        color: userColor
    }

    const objectBtn={

        backgroundColor: userColor
    }
    
  return (
    <div className='quote__card' style={objectStyle}>
    <i className="fa-solid fa-quote-left" style={objectStyle}></i>
    
     <h2 className='title__card'>{ `${userRandom.quote}`}</h2>

     <h3 className='author__card'> {`${userRandom.author}`} </h3>

     <div> 
     <button onClick={getRandomElement} style={objectBtn}>&#62;</button>

     </div>


    </div>
  )
}

export default QuoteCards