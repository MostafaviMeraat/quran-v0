import React from 'react'

const Favorite = () => {
  const findMatches = () => {

  }

  return (
    <div className='wrapper-juz'>
      <div className='sura-search-all'>
        <div className='sura-search-area relative'>
          <input
            type="text"
            placeholder='نام سوره'
            className='sura-search-input'
            onChange={findMatches}
          />
          <i
            className="sura-search-icon fa-sharp fa-solid fa-magnifying-glass">
          </i>
        </div>
      </div>
    </div>
  )
}

export default Favorite