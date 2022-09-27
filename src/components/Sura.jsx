import React, { useRef } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { QuranDataSura, QuranDataJuz, QuranDataPage } from '../quran-resources (farawin)/quran-metadata'
import emla from '../quran-resources (farawin)/quran-text-emla.json'
import makarem from '../quran-resources (farawin)/quran-translate.fa.makarem.json'


const Sura = () => {


  const { index } = useParams()
  const suraNum = parseInt(index)
  const data = QuranDataSura
  const start = data[suraNum][0]
  let eachSura = []
  let eachAyaTranslate = []
  const translate = makarem
  const [isPlay, setIsPlay] = useState(false)
  const allJuzes = QuranDataJuz
  const [juz, setJuz] = useState(0)
  let temp



  const findPage = (suraNum) => {
    const page = QuranDataPage.filter((item, index) => { return index && item[0] === suraNum + 1 })
    let myPage = QuranDataPage.indexOf(page[0]) //here is the page
    if (myPage === -1) {
      for (let c = 1; c < 5; c++) {
        const page = QuranDataPage.filter((item, index) => { return index && item[0] === suraNum + 1 - c })
        if (page.length > 0) {
          myPage = QuranDataPage.indexOf(page[page.length - 1])
          break
        }
      }
    }

    console.log(myPage);
  }
  findPage(suraNum)


  const play = (index, suraNum) => {
    setIsPlay(!isPlay)
  }
  const suraMaker = (start) => {
    if (juz !== 0) {
      eachSura.push(`juz shumare ${juz}`)
      eachAyaTranslate.push('')
    }
    if (start !== 0) {
      eachSura.push('بِسۡمِ اللّٰهِ الرَّحۡمٰنِ الرَّحٖیمِ')
      eachAyaTranslate.push("به نام خداوند بخشنده بخشایشگر")
    }
    for (let c = start; c < data[suraNum][1] + start; c++) {
      eachSura.push(emla[c])
      eachAyaTranslate.push(translate[c])
    }
  }

  suraMaker(start)

  return (

    <div className='wrapper-sura'>
      <div className="each-sura">
        {eachSura.map((aya, index) => {
          return (
            <div className='aya' key={index}>
              <div>
                <span className='ayaNumber'>{index !== 0 && index} {aya}</span>
              </div>
              <div className='translate'>{eachAyaTranslate[index]}</div><br /><hr />
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Sura


// {
//   isPlay && <audio className='audio' controls autoPlay src={`http://www.everyayah.com/data/Menshawi_32kbps/001001.mp3`} />
// }
// {
//   !isPlay
//   ? <span className="fixed material-symbols-outlined play" onClick={() => { play(index, suraNum) }}>play_arrow</span>
//   :
//   <span className="fixed material-symbols-outlined pause" onClick={() => { play(index, suraNum) }}>
//     pause
//   </span>
// }