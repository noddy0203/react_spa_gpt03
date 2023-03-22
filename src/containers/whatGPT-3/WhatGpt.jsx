import React from 'react'
import "./whatGPT.css"
import Feature from "../../component/feature/Feature"
const WhatGpt = () => {
  return (
      <div className="gpt3_whatgpt3 section_margin">
        <div className="gpt3_whatgpt3-feature">
           <Feature className="finaleCls" title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
        </div>
        <div className="gpt3_whatgpt3-heading">
          <h1 className='gradient_text'>The Possibilities are beyond your imagination</h1>
           <p>Explore the Library</p>
        </div>
        <div className="gpt3_whatgpt3-container">
          <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
          <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"/>
          <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."/>
        </div>
      </div>
  )
}

export default WhatGpt