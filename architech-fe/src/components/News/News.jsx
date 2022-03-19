import './News.sass'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ArticleData from '../TempData'
import RecentArticleData from '../TempRecentData'

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [recentArticles, setRecentArticles] = useState([])

    const [pageSize, setPageSize] = useState()

    const updateNews = async () => {
        try {
            const apiKey = process.env.REACT_APP_API_KEY
            const URL = `https://api.newscatcherapi.com/v2/search?q=${props.category}&lang=en&topic=tech&page_size=7&page=1`

            let data = await fetch(URL, {
                headers: {
                    'x-api-key': apiKey,
                }
            })

            let parsedData = await data.json()
            setArticles(parsedData.articles)
            setPageSize(7)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        updateNews()
    }, [props])

    const fetchRecentArticles = async () => {
        try {
            const apiKey = process.env.REACT_APP_API_KEY
            const recentURL = `https://api.newscatcherapi.com/v2/search?q=${props.category}&lang=en&topic=tech&sort_by=date&page_size=12&page=1`

            let data = await fetch(recentURL, {
                headers: {
                    'x-api-key': apiKey
                }
            })

            let parsedData = await data.json()
            setRecentArticles(parsedData.articles)
            setPageSize(12)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            fetchRecentArticles()
        }, 2000);
    }, [props])

    return (
        <div>
            <div className='card-container' name='trending'>
                <h2 className='trending-title'>Trending</h2>
                <ul className='card-list'>
                    {articles.map(article => {
                        return (
                            <li key={article._id} className='card'>
                                <img src={article.media || 'https://cdn.pixabay.com/photo/2020/03/05/17/35/tech-news-4905017_640.jpg'} className='card-img-top' onError={(e) => (e.target.onerror = null, e.target.src = 'https://cdn.pixabay.com/photo/2020/03/05/17/35/tech-news-4905017_640.jpg')} />
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        <Link to={`/${props.category}/${article._id}`} className="card-title-link">{article.title.toLowerCase()}</Link>
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
                            <li key={article._id} className='recent-card'>
                                <img src={article.media || 'https://cdn.pixabay.com/photo/2020/03/05/17/35/tech-news-4905017_640.jpg'} className='recent-card-image' onError={(e) => (e.target.onerror = null, e.target.src = 'https://cdn.pixabay.com/photo/2020/03/05/17/35/tech-news-4905017_640.jpg')} />
                                <div className='recent-card-body'>
                                    <h5 className='recent-card-title'>
                                        <Link to={`/${props.category}/${article._id}/recent`} className='recent-card-title-link'>{article.title.toLowerCase()}</Link>
                                    </h5>
                                    <div className='recent-card-authorDate'>
                                        <p className='recent-card-author text-muted'>{!article.author ? ' ' : 'By '}<span>{!article.author ? 'Author Unknown' : article.author}</span> | </p>
                                        <p className='recent-card-date'><cite className="text-muted">{new Date(article.published_date).toLocaleString()}</cite></p>
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
    category: 'tech'
}

News.propTypes = {
    category: PropTypes.string
}

export default News