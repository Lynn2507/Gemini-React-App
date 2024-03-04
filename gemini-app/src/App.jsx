import { useState } from 'react'

export default function App() {

  const [error, setError] = useState("")
  const handleError = () => {
    setError(true)
  }

  return (
    <section className="main-section">
      <div className="search-div">
        <p>What do you want to know?</p>
        <button className="surprise-btn">Surprise me!</button>
      </div>

      <div className='input-container'>
        <input
          value={""}
          placeholder='When is Christmas?'
          onChange={handleError}
        />
        {!error && <button>ASK ME</button>}
        {error && <button>CLEAR</button>}
      </div>
      {error && <p>{error}</p>}
      <div className='search-results'>
        <div key={""}>
          <p className='answer'></p>
        </div>
      </div>
    </section>

  )
}