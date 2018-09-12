import React from 'react';
import Article from '../Article'
import './style.css'

export default function ArticleList ({articles}) {
        const articleList = articles.map(art => 
            <li key={art.id} className='article-list__li'><Article article = {art}/></li>
            )
        return (
            <ul>
                {articleList}
            </ul>
        )
    
    
}