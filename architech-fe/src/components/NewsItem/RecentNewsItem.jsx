import './NewsItem.sass'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const RecentNewsArticle = (props) => {

    const [recentNewsArticle, setRecentNewsArticle] = useState()
    let { id } = useParams()

    const updateRecentArticles = () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const recentURL = `https://api.newscatcherapi.com/v2/search?q=${props.category}&lang=en&topic=tech&sort_by=date&page_size=12&page=1`

        fetch(recentURL, { headers: { 'x-api-key': apiKey } }).then((res) => res.json()).then(data => {

            const foundArticle = data.articles.find(article => { return article._id == id })
            setRecentNewsArticle(foundArticle)
        })
    }
    useEffect(() => {
        updateRecentArticles()
    })


    if (!recentNewsArticle) {
        return <h3 className='loading-text' style={{ marginTop: '40px' }}>Your article is loading... If the article doesn't load, try refreshing the page!</h3>
    }

    return (
        <div className='container'>
            <div className='article'>
                <h1 className='article-title'>{recentNewsArticle.title}</h1>
                <div className='article-subheader'>
                    <p className='article-subheader-author text-muted'><cite>By <span>{recentNewsArticle.author}</span></cite> | </p>
                    <p className='article-subheader-date'><cite className="text-muted">{new Date(recentNewsArticle.published_date).toUTCString()}</cite></p>
                </div>
                <img className='article-image' src={recentNewsArticle.media || 'https://cdn.pixabay.com/photo/2020/03/05/17/35/tech-news-4905017_640.jpg'} onError={(e) => (e.target.onerror = null, e.target.src = 'https://cdn.pixabay.com/photo/2020/03/05/17/35/tech-news-4905017_640.jpg')} />
                <p className='article-description'>{recentNewsArticle.summary}</p>
                <p className='article-read-more'>To read the full article, visit the link below</p>
                <p className='article-linktag'>
                    <a className='article-linktag-link' href={recentNewsArticle.link}>{recentNewsArticle.title}</a>
                </p>
            </div>
        </div >
    )
}

RecentNewsArticle.defaultProps = {
    category: 'tech'
}

RecentNewsArticle.propTypes = {
    category: PropTypes.string
}

export default RecentNewsArticle