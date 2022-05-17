import React from 'react'
import memesData from '../memesData'

const Meme = () => {

    function handleOnClick (e){
        const memeArray = memesData.data.memes;
        const randomNumber = (Math.floor(Math.random() * memeArray.length))
        console.log(randomNumber)
        e.preventDefault();
    }

  return (
    <main>
        <form className='form'>
            <input 
                type='text'
                placeholder='Top text'
                className='form--input'
            />
            <input 
                type='text'
                placeholder='Bottom Text'
                className='form--input'
            />
            <button onClick={handleOnClick} className='form--button'>
                Get me a meme image 🐸
            </button>
        </form>
    </main>
  )
}

export default Meme