import './NewsItem.sass'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ArticleData from '../../TempData'


// const apiKey = process.env.REACT_APP_API_KEY;
// const URL = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=technology&language=en&sortBy=popularity&pageSize=8`

const NewsArticle = () => {

    const [newsArticle, setNewsArticle] = useState()
    let { name } = useParams()

    const updateNewsArticle = async () => {
        // fetch(URL)
        //     .then((res) => res.json())
        //     .then(data => {
        //         console.log(data)
        //         console.log(name)

        // const foundArticle = data.articles.find(article => { return article.title == name })
        // console.log(foundArticle)
        // setNewsArticle(foundArticle)
        //     })

        const foundArticle = ArticleData.articles.find(article => { return article.title == name })
        console.log(foundArticle)
        setNewsArticle(foundArticle)
    }

    useEffect(() => {
        updateNewsArticle()
    }, [])

    if (!newsArticle) {
        return <h3 className='loading-text' style={{ marginTop: '100px' }}>Your article is loading</h3>
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

export default NewsArticle