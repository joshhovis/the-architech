import './News.sass'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'
import ArticleData from '../../TempData'
import RecentArticleData from '../../TempRecentData'

// const apiKey = process.env.REACT_APP_API_KEY;
// const URL = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=technology&language=en&sortBy=popularity&pageSize=8`

// const URL = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=technology&language=en&sortBy=publishedAt&pageSize=8`

const News = () => {

    console.log(ArticleData)
    console.log(ArticleData.articles)
    console.log(RecentArticleData)

    const [articles, setArticles] = useState([])
    const [recentArticles, setRecentArticles] = useState([])

    const updateNews = async () => {
        // let data = await fetch(URL)
        // console.log(data)
        // setArticles(data.articles)
        // console.log(data.articles)

        setArticles(ArticleData.articles)
        setRecentArticles(RecentArticleData.articles)
    }

    useEffect(() => {
        updateNews()
    }, [])


    return (
        <div>
            <div className='card-container'>
                <h2 className='trending-title' id='trending'>Trending</h2>
                <ul className='card-list' id='trending'>
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

            <div className='recent-container'>
                <h2 className='recent-title' id='recent'>Recent</h2>
                <ul className='recent-card-list' id='trending'>
                    {recentArticles.slice(0, 7).map((article, idx) => {
                        return (
                            <li className='recent-card'>
                                <img src={article.urlToImage} className='recent-card-image' />
                                <div className='recent-card-body'>
                                    <h5 className='recent-card-title'>
                                        <Link to={`/articles/${article.title}`} className='recent-card-title-link'>{article.title}</Link>
                                    </h5>
                                    <p className='recent-card-author'>By <span>{!article.author ? 'Unknown' : article.author}</span></p>
                                    {/* <div className='card-date'>
                                    <cite className="text-muted">{new Date(article.publishedAt).toUTCString().slice(0, 17)}</cite>
                                </div> */}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default News