import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const SingleQuestion = (question) => {
    const[showInfo,setShowInfo] = useState(false)
    const{title,info} = question

    const toggle = () =>{
        setShowInfo(!showInfo)
    }

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={toggle}>
        {showInfo ? <AiOutlineMinus/>:<AiOutlinePlus/>}
        </button>
        
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion