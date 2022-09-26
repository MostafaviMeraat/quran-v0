import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuranDataPage, QuranDataSura } from '../quran-resources (farawin)/quran-metadata'

const AllSura = () => {
  const pages = QuranDataPage
  const data = QuranDataSura
  const navigate = useNavigate()
  const [isEmpty, setIsEmpty] = useState(true)
  let temp = []
  const [foundSuras, setFoundSuras] = useState([])


  const findSura = (index) => {
    navigate(`sura/${index}`)
  }

  const findMatches = (e) => {
    if (e.target.value !== '') {
      setIsEmpty(false)
    }
    temp = []
    for (let c = 0; c < data.length; c++) {
      if
        (
        data[c][4].includes(e.target.value) ||
        data[c][5].toLowerCase().includes(e.target.value.toLowerCase()) ||
        data[c][6].toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        temp.push(data[c])
      }
    }
    setFoundSuras(temp)
  }



  return (
    <div className='wrapper-sura'>

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

      <div className='all-suras'>
        {isEmpty ?
          data.map((sura, index) => {
            return (<div
              key={index}
              className='sura'
              onClick={() => { findSura(index) }}>
              <span>{index + 1}</span>
              <p className='persian-name'>{sura[4]}</p>
              <p>{sura[6]}</p>
              <p>تعداد آیات: {sura[1]} </p>
              <p>{sura[7]}</p>
            </div>)
          }) :
          foundSuras.map((sura, index) => {
            return (<div
              key={index}
              className='sura'
              onClick={() => { findSura(index) }}>
              <span>{index + 1}</span>
              <p className='persian-name'>{sura[4]}</p>
              <p>{sura[6]}</p>
              <p>تعداد آیات: {sura[1]} </p>
              <p>{sura[7]}</p>
            </div>)
          })
        }
      </div>

    </div>
  )
}
export default AllSura