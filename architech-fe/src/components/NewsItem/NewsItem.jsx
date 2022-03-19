import './NewsItem.sass'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const NewsArticle = (props) => {

    const [newsArticle, setNewsArticle] = useState()
    let { id } = useParams()

    const updateNewsArticle = () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const URL = `https://api.newscatcherapi.com/v2/search?q=${props.category}&lang=en&topic=tech&page_size=7&page=1`
        fetch(URL, { headers: { 'x-api-key': apiKey } })
            .then((res) => res.json())
            .then(data => {

                console.log(data.articles)
                const foundArticle = data.articles.find(article => { return article._id == id })
                setNewsArticle(foundArticle)
            })

    }

    useEffect(() => {
        updateNewsArticle()
    })

    // const updateRecentArticles = () => {
    //     const apiKey = process.env.REACT_APP_API_KEY;
    //     const recentURL = `https://api.newscatcherapi.com/v2/search?q=${props.category}&lang=en&topic=tech&sort_by=date&page_size=12&page=1`

    //     fetch(recentURL, { headers: { 'x-api-key': apiKey } }).then((res) => res.json()).then(data => {

    //         const foundArticle = data.articles.find(article => { return article.title == name })
    //         setNewsArticle(foundArticle)
    //     })
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         updateRecentArticles()
    //     }, 2000);
    // })

    if (!newsArticle) {
        return <h3 className='loading-text' style={{ marginTop: '40px' }}>Your article is loading... If the article doesn't load, try refreshing the page!</h3>
    }

    return (
        <div className='container'>
            <div className='article'>
                <h1 className='article-title'>{newsArticle.title}</h1>
                <div className='article-subheader'>
                    <p className='article-subheader-author text-muted'><cite>By <span>{newsArticle.author}</span></cite> | </p>
                    <p className='article-subheader-date'><cite className="text-muted">{new Date(newsArticle.published_date).toUTCString()}</cite></p>
                </div>
                <img className='article-image' src={newsArticle.media} />
                <p className='article-description'>{newsArticle.summary}</p>
                <p className='article-read-more'>To read the full article, visit the link below</p>
                <p className='article-linktag'>
                    <a className='article-linktag-link' href={newsArticle.link}>{newsArticle.title}</a>
                </p>
            </div>
        </div >
    )
}

NewsArticle.defaultProps = {
    category: 'tech'
}

NewsArticle.propTypes = {
    category: PropTypes.string
}

export default NewsArticle