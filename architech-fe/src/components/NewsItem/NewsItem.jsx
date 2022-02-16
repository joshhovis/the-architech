import './NewsItem.sass'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const NewsArticle = (props) => {

    const [newsArticle, setNewsArticle] = useState()
    let { name } = useParams()

    const updateNewsArticle = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const URL = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${props.category}&language=en&sortBy=popularity`
        fetch(URL)
            .then((res) => res.json())
            .then(data => {
                // console.log(data)
                // console.log(name)
                console.log(data.articles)

                const foundArticle = data.articles.find(article => { return article.title == name })
                console.log(foundArticle)
                setNewsArticle(foundArticle)
            })
    }

    useEffect(() => {
        updateNewsArticle()
        // fetchRecentArticles()
    }, [props])

    const fetchRecentArticles = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const recentURL = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${props.category}&language=en&sortBy=publishedAt&pageSize=20`

        fetch(recentURL).then((res) => res.json()).then(data => {
            // console.log(data)
            // console.log(name)
            // console.log(data.articles)

            const foundArticle = data.articles.find(article => { return article.title == name })
            console.log(foundArticle)
            setNewsArticle(foundArticle)
        })
    }

    if (!newsArticle) {
        return <h3 className='loading-text' style={{ marginTop: '40px' }}>Your article is loading... If the article doesn't load, try refreshing the page!</h3>
    }

    return (
        <div className='container'>
            <div className='article'>
                <h1 className='article-title'>{newsArticle.title}</h1>
                <div className='article-subheader'>
                    <p className='article-subheader-author text-muted'><cite>By <span>{newsArticle.author}</span></cite> | </p>
                    <p className='article-subheader-date'><cite className="text-muted">{new Date(newsArticle.publishedAt).toUTCString()}</cite></p>
                </div>
                <img className='article-image' src={newsArticle.urlToImage} />
                <p className='article-description'>{newsArticle.description.slice(0, 220)}...</p>
                <p className='article-read-more'>To read the full article, visit the link below</p>
                <p className='article-linktag'>
                    <a className='article-linktag-link' href={newsArticle.url}>{newsArticle.title}</a>
                </p>
            </div>
        </div >
    )
}

NewsArticle.defaultProps = {
    category: 'technology'
}

NewsArticle.propTypes = {
    category: PropTypes.string
}

export default NewsArticle