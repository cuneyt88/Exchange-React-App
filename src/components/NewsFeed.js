import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const NewsFeed = () => {
  const [articles,setArticles]=useState(null)


  useEffect(() => {

      const options = {
      method: 'GET',
      url: 'https://crypto-update-live.p.rapidapi.com/news',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'crypto-update-live.p.rapidapi.com'
      }
    };

    axios.request(options).then((response)=> {
      console.log(response.data);
      setArticles(response.data)
    }).catch((error)=> {
      console.error(error);
    });
  
    
  }, [])
  
  console.log(articles)
  const first7Articles=articles?.slice(0,7)

  return (
    <div className='news-feed'>
      <h2>NewsFeed</h2>
      {first7Articles?.map((article,index)=>(
      <div key={index}>
        <a href={article.URL}>
          <p>{article.Title}</p>
        </a> 
      </div>))}
    </div>
  )
}

export default NewsFeed