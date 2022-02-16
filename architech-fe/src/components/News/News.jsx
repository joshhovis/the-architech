import './News.sass'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ArticleData from '../TempData'
import RecentArticleData from '../TempRecentData'

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [recentArticles, setRecentArticles] = useState([])

    const updateNews = async () => {
        try {
            const apiKey = process.env.REACT_APP_API_KEY;
            const URL = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${props.category}&language=en&sortBy=popularity&pageSize=7`
            let data = await fetch(URL)

            if (data.status === 429 || data.status === 426) {
                setArticles(ArticleData.articles)
            } else {
                let parsedData = await data.json()
                setArticles(parsedData.articles)
            }

        } catch (err) {
            console.log(err)
        }

        // setArticles(ArticleData.articles)
    }

    useEffect(() => {
        updateNews()
        fetchRecentArticles()
    }, [props])

    const fetchRecentArticles = async () => {
        try {
            const apiKey = process.env.REACT_APP_API_KEY;
            const recentURL = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${props.category}&language=en&sortBy=publishedAt&pageSize=20`
            let data = await fetch(recentURL)

            if (data.status === 429 || data.status === 426) {
                setRecentArticles(RecentArticleData.articles)
            } else {
                let parsedData = await data.json()

                for (let i = 0; i < parsedData.articles.length; i++) {
                    if (parsedData.articles[i].urlToImage == ('null' || null)) {
                        parsedData.articles.splice([i], 1)
                    }
                }

                setRecentArticles(parsedData.articles)
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className='card-container' name='trending'>
                <h2 className='trending-title'>Trending</h2>
                <ul className='card-list'>
                    {articles.map(article => {
                        return (
                            <li className='card'>
                                <img src={article.urlToImage} className='card-img-top' />
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        <Link to={`/${props.category}/${article.title}`} className="card-title-link">{article.title.toLowerCase()}</Link>
                                    </h5>
                                    <p className='card-author-name'>By <span>{!article.author ? 'Unknown' : article.author}</span></p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className='recent-container' name='recent'>
                <h2 className='recent-title'>Recent</h2>
                <ul className='recent-card-list'>
                    {recentArticles.map(article => {
                        return (
                            <li className='recent-card'>
                                <img src={article.urlToImage} className='recent-card-image' />
                                <div className='recent-card-body'>
                                    <h5 className='recent-card-title'>
                                        <Link to={`/${props.category}/${article.title}`} className='recent-card-title-link'>{article.title.toLowerCase()}</Link>
                                    </h5>
                                    <div className='recent-card-authorDate'>
                                        <p className='recent-card-author text-muted'>{!article.author ? ' ' : 'By '}<span>{!article.author ? 'Author Unknown' : article.author}</span> | </p>
                                        <p className='recent-card-date'><cite className="text-muted">{new Date(article.publishedAt).toLocaleString()}</cite></p>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

News.defaultProps = {
    category: 'technology'
}

News.propTypes = {
    category: PropTypes.string
}

export default News