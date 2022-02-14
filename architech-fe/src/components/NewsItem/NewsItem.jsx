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
        <div>
            <h1 style={{ marginTop: '100px' }}>{newsArticle.title}</h1>
            <h6><cite>{newsArticle.author}</cite></h6>
            <h6><cite className="text-muted">{new Date(newsArticle.publishedAt).toUTCString()}</cite></h6>
            <img src={newsArticle.urlToImage} />
            <p>{newsArticle.description}</p>
            <p>You can read the full article by clicking the link below</p>
            <a href={newsArticle.url}>{newsArticle.title}</a>
        </div>
    )
}

export default NewsArticle