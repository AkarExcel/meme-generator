import React from 'react'

const Meme = () => {

    const [allMeme, setAllMeme] = React.useState([])

    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            memeImage: ""
        }
    )

    function handleSubmit(e) {
        e.preventDefault()
        console.log(meme.memeImage)

    }
    
    function handleOnChange (e){
        const {name, value} = e.target
        setMeme(prevState => ({
            
            ...prevState,
            [name] : [value]

        }))
    }

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes));
    },[])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            memeImage: url
        }))
    }

  return (
    <main>
        <form className='form' onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Top text'
                className='form--input'
                name="topText"
                value={meme.topText}
                onChange={handleOnChange}
            />
            <input 
                type='text'
                placeholder='Bottom Text'
                className='form--input'
                name="bottomText"
                value={meme.bottomText}
                onChange={handleOnChange}
            />
            <button onClick={getMemeImage} className='form--button'>
                Get me a meme image 🐸
            </button>
        </form>
        {
            meme.memeImage ? <div className="meme"> <img src={meme.memeImage} className="meme--image" alt='meme ' /> <h2 className="meme--text top">{meme.topText}</h2> <h2 className="meme--text bottom">{meme.bottomText}</h2> </div> : console.log("No Image")
        }
        
    </main>
  )
}

export default Meme