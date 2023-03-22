import React from 'react'
import "./brand.css"
import google from "../../assets/google.png"
import dropbox from "../../assets/dropbox.png"
import slack from "../../assets/slack.png"
import shopify from "../../assets/shopify.png"

const Brand = () => {
  return (
    <div className="gpt3_brand section_padding">
      <div>
        <img src={google} alt="google_img" />
      </div>
      <div>
        <img src={shopify} alt="shopify_img" />
      </div>
      <div>
        <img src={slack} alt="slack_img" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox_img" />
      </div>
    </div>
  )
}

export default Brand