import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'; 

library.add(fas)

function App() {
  const [video, setVideo] = useState("")
  const [url, setUrl] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    movieTrailer(video).then(res => {
      setUrl(res)
      setVideo('')
    })
  }

  const handleChange = (event) => {
    setVideo(event.target.value)
  }

  return (
    <div className="bg-black-700 min-h-screen flex items-center justify-center p-8 flex-col">
      <div className="header">
        <h1 className=" uppercase text-error text-4xl font-black tracking-wider mb-8 text-center">Movie Trailer Searcher</h1>
      </div>
      <div className="searchSection">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Type the movie name" className="input input-bordered input-error w-full mb-3" value={video} onChange={handleChange} />
          <button type="submit" className="btn btn-error w-full text-lg text-black-700"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />Search</button>
        </form>
      </div>
      <div className="divider divider-error container mx-auto my-8"></div>
      <div className="trailer container mx-auto flex justify-center items-center">
        {
          (url === '')
            ?
            <div className='skeleton w-3/4 h-96'></div>
            :
            <ReactPlayer url={url} />
        }
      </div>
    </div>
  )
}

export default App
