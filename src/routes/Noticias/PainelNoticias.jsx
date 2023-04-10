import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './painelnoticias.css'
import { Link } from 'react-router-dom';

import React, { useState, useEffect } from "react";
import axios from 'axios'

export const PainelNoticias = ({ slides }) => {

    const [posts, setPosts] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        axios.get("https://hammerhead-app-5cwy4.ondigitalocean.app/api/noticias")
            .then((response) => {
                const { data } = response.data;
                setPosts(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios
            .get("https://hammerhead-app-5cwy4.ondigitalocean.app/api/upload/files")
            .then((response) => {
                const { data } = response;
                const filteredData = data.filter((file) => file.caption === "teste");
                const urls = filteredData.map((file) => 'https://hammerhead-app-5cwy4.ondigitalocean.app' + file.url);
                setImageUrls(urls);
            });
    }, []);

    return (
        <div className="news-container news-grid">
            <h1 className="news-title">Notícias</h1>
            <hr className="news-divider" />
            {posts.map((post, index) => (
                <div key={post.id} className="news-item">
                    <div className="news-img-container">
                        <img className="news-img" src={imageUrls[index]} alt={post?.attributes?.titulo} />
                        <div className="news-text-container">
                            <h2 className="news-text-title">{post?.attributes?.titulo}</h2>
                            <p className="news-text-content">{post?.attributes?.texto}</p>
                            <div className='news-link-container'>
                                <Link to={`/noticias/${post?.id}`} className='news-link'>Leia mais</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}
