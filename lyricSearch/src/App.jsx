import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import lyricServices from './services/lyrics'

library.add(fas)

function App() {
  const [artist, setArtist] = useState('')
  const [title, setTitle] = useState('')
  const [lyrics, setLyrics] = useState(``)

  const handleArtistChange = (event) => {
    setArtist(event.target.value)
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    lyricServices
      .getLyric(artist, title)
      .then(res => {
        console.log(res.lyrics)
        setLyrics(res.lyrics)
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div className=" bg-black-700 min-h-screen flex items-center flex-col p-8">
      <div className="header">
        <h1 className=" uppercase text-error text-4xl font-black tracking-wider mb-8">Lyrics Searcher</h1>
      </div>
      <div className="search-section">
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Type the artist name" className="input input-bordered input-error w-full mb-3" value={artist} onChange={handleArtistChange} />
          <input type="text" placeholder="Type the song title" className="input input-bordered input-error w-full mb-3" value={title} onChange={handleTitleChange} />
          <button type="submit" className="btn btn-error w-full text-lg text-black-700"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />Search</button>
        </form>
      </div>
      <div className="divider divider-error"></div>
      <div className="lyrics">
        <pre>{lyrics}</pre>
      </div>
    </div>
  )
}

export default App
