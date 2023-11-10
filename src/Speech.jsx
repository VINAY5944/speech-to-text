import React from 'react'
import './speech.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
function Speech() {
     function strtlist(){SpeechRecognition.startListening({ continuous: true,language:'en-IN' })}
      function stop(){SpeechRecognition.stopListening()}
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

    if (!browserSupportsSpeechRecognition) {
      return null
    }
   
  
  return (
    <div className='container'><h1 style={{paddingLeft:200}}>speech recognition</h1><br/>
    <div className='box'>
    < p className='para'>{transcript}</p>
    
    </div>
    
    
    <div >
        <button className='btn1' onClick={strtlist}>REC</button>
        <button className='btn2' onClick={stop}>stop</button>
        
    
    </div>
    
    
    </div>
  )
}

export default Speech