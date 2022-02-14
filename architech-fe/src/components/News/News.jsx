import './News.sass'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArticleData from '../../TempData'

// const apiKey = process.env.REACT_APP_API_KEY;
// const URL = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=technology&language=en&sortBy=popularity&pageSize=8`

const News = () => {

    console.log(ArticleData)
    console.log(ArticleData.articles)

    const [articles, setArticles] = useState([])

    const updateNews = async () => {

        // let data = await fetch(URL)
        // console.log(data)
        // setArticles(data.articles)
        // console.log(data.articles)

        setArticles(ArticleData.articles)
    }

    useEffect(() => {
        updateNews()
    }, [])


    return (
        <div className='card-container'>
            <ul className='card-list'>
                {articles.slice(0, 7).map((article, idx) => {
                    return (
                        <li className='card'>
                            <img src={article.urlToImage} className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='card-title'>
                                    <Link to={`/articles/${article.title}`} className="card-title-link">{article.title}</Link>
                                </h5>
                                <p className='card-author-name'>By <span>{!article.author ? 'Unknown' : article.author}</span></p>
                                {/* <div className='card-date'>
                                    <cite className="text-muted">{new Date(article.publishedAt).toUTCString().slice(0, 17)}</cite>
                                </div> */}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default News