import React from 'react';
import Article from './Article'

export default function ArticleList ({articles}) {
        const articleList = articles.map(art => 
            <li key={art.id} style={{marginTop: '10px'}}><Article article = {art}/></li>
            )
        return (
            <ul style={{listStyle: 'none'}}>
                {articleList}
            </ul>
        )
    
    
}