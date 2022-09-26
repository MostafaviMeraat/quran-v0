import React, { useEffect } from 'react'
import { json, useParams } from 'react-router-dom'
import { QuranDataSura } from '../quran-resources (farawin)/quran-metadata'
import emla from '../quran-resources (farawin)/quran-text-emla.json'


const Sura = () => {


  const { index } = useParams()
  const suraNum = parseInt(index)
  const data = QuranDataSura
  const start = data[suraNum][0]
  let eachSura = []

  const suraMaker = (start) => {
    // eachSura = []
    if (start !== 0) {
      eachSura.push('بِسۡمِ اللّٰهِ الرَّحۡمٰنِ الرَّحٖیمِ')
    }
    for (let c = start; c < data[suraNum][1] + start; c++) {
      eachSura.push(emla[c])
    }
  }
  suraMaker(start)


  return (
    <div className='wrapper-sura'>
      {eachSura.map((aya, index) => {
        return (
          <div className='aya' key={index}>{aya} &nbsp;&nbsp; {index != 0 && index}</div>
        )
      })}
    </div>
  )
}

export default Sura