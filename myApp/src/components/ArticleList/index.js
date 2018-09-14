import React, {PureComponent} from 'react';
import Article from '../Article'
import './style.css'

export default  class ArticleList extends PureComponent {
    render(){
        const articleList = this.props.articles.map((art, index) => 
        <li key={art.id} className='article-list__li'>
        <Article article = {art} defaultOpen = {index === 0} />
        </li>
        )
    return (
        <ul>
            {articleList}
        </ul>
    )
    }

}