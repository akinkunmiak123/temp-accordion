import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({questions}) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        const {id} = question
        return <SingleQuestion key={id}{...question}/>
      })}
    </section>
  )
}

export default Questions