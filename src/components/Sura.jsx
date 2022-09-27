import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { QuranDataSura } from '../quran-resources (farawin)/quran-metadata'
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
  let currAya = 0


  const play = (index, suraNum) => {
    // az inja bayad edame bedam
    setIsPlay(!isPlay)
  }
  const suraMaker = (start) => {
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

      {eachSura.map((aya, index) => {
        return (
          <div className='aya' key={index}>
            {isPlay && <audio controls autoPlay className='audio'>
              <source src={`http://www.everyayah.com/data/Menshawi_32kbps/001001.mp3`} type='audio/mp3' />
            </audio>}
            {!isPlay
              ? <span className="material-symbols-outlined play" onClick={() => { play(index, suraNum) }}>play_arrow</span>
              :
              <span className="material-symbols-outlined pause" onClick={() => { play(index, suraNum) }}>
                pause
              </span>}
            <div><span className='ayaNumber'>{index != 0 && index}</span> {aya}</div>
            <div className='translate'>{eachAyaTranslate[index]}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Sura