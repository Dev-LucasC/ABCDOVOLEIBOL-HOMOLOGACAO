import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import './slider.css'

export const Slider = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://shark-app-6myi8.ondigitalocean.app/api/noticias?populate=*")
      .then((response) => {
        const { data } = response.data;
        data.sort((a, b) => {
          const dateA = new Date(a.attributes.createdAt);
          const dateB = new Date(b.attributes.createdAt);
          return dateB - dateA;
        });
        setPosts(data.slice(0, 2));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
      <div>
        <h1>Noticias</h1>
        <hr size="6" width="100%" align="left" color="black"></hr>
      </div>
      <div className="newsCardsContainer">
        {posts.map((post, index) => (
          <Link to={`/noticias/${post?.id}`} key={index} className='newsCard'>
            <div className='newsCard__img'>
              <img src={post?.attributes.imagem.data.attributes.url} alt={post?.attributes?.titulo} loading="lazy" />
              <div className='newsCard__content'>
                <h1>{post?.attributes?.titulo}</h1>
                <p className='newsCard__text'>{post?.attributes?.texto}</p>
                <div className='newsCard__cta'>
                  <button className='btn'>Ver noticia</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}