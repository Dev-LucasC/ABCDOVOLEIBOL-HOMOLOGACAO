import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './App.css'
import { Link } from 'react-router-dom';



import React, { useState, useEffect } from "react";
import axios from 'axios'

export const Slider = ({ slides }) => {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    axios.get("https://king-prawn-app-bnxyc.ondigitalocean.app/api/noticias?populate=*")
      .then((response) => {
        const { data } = response.data;
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <section>
      <div>
        <h1> Noticias </h1>
        <hr size="6" width="100%" align="left" color="black"></hr>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectCube]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, bottom: 100 }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}

      >{posts.map((post, index) => {

        return (
          <SwiperSlide key={index}>
            <div className='container_noticias'>
              <div className='portofolio__item-img'>
                <img src={"https://king-prawn-app-bnxyc.ondigitalocean.app" + post?.attributes.imagem.data[0].attributes.url} alt={post?.attributes?.titulo} />
              </div>
              <h2>{post?.attributes?.titulo}</h2>
              <p>{post?.attributes?.texto}</p>
              <div className='portofolio__item-cta'>
                <Link to={`/noticias/${post?.id}`} className='btn'>Ver noticia</Link>
              </div>
            </div>
          </SwiperSlide>
        );

      })}
      </Swiper>
    </section>
  )

}
