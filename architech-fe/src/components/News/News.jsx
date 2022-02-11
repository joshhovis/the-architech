import './News.sass'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArticleData from '../../TempData'

const News = () => {

    console.log(ArticleData)
    console.log(ArticleData.articles)

    const [articles, setArticles] = useState([])

    const updateNews = async () => {

        setArticles(ArticleData.articles)

    }

    useEffect(() => {
        updateNews()
    }, [])


    return (
        <div className='card-container'>
            <ul className=''>
                {articles.slice(0, 4).map((article, idx) => {
                    return (
                        <li className='card'>
                            <img src={article.urlToImage} className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='card-title'>
                                    <Link to={`/articles/${idx}`} className="card-title-link">{article.title}</Link>
                                </h5>
                                <p className='card-author-name'>By: {!article.author ? 'Unknown' : article.author}</p>
                                <div className='card-date'>
                                    <cite className="text-muted">{new Date(article.publishedAt).toUTCString().slice(0, 17)}</cite>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default News