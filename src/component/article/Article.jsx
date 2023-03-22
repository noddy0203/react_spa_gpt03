import React from 'react'
import "./article.css"
const Article = ({imgUrl , date  ,title}) => {
  return (
    <div className="gpt3_blog-container_article">
          <div className="gpt3_blog-container_article-image">
            <img src={imgUrl} alt="blog_images" />
          </div>
          <div className='gpt3_blog-container_article-content'>
            <div>
              <p>{date}</p>
              <h3>{title}</h3>
            </div>
          </div>
    </div>
  )
}

export default Article