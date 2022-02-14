import './NewsItem.sass'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ArticleData from '../../TempData'

console.log(ArticleData)
console.log(ArticleData.articles)
const apiKey = process.env.REACT_APP_API_KEY;
const URL = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=technology&language=en&sortBy=popularity&pageSize=8`

const NewsArticle = () => {

    const [newsArticle, setNewsArticle] = useState()
    let { idx } = useParams()
    let newURL = URL + idx

    const updateNewsArticle = async () => {
        setNewsArticle(ArticleData.articles)
    }

    useEffect(() => {
        updateNewsArticle()
    }, [])


    const updateNewsArticle = async () => {
        setNewsArticle(ArticleData.articles)
    }

    useEffect(() => {
        updateNewsArticle()
    }, [])

    if (!newsArticle) {
        return <h3 className='loading-text' style={{ marginTop: '100px' }}>Your article is loading</h3>
    }

    return (
        <h1 style={{ marginTop: '100px' }}>Article Title</h1>
    )
}

export default NewsArticle