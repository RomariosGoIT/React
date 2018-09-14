import React, {PureComponent} from 'react';
import Article from '../Article'
import './style.css'

export default  class ArticleList extends PureComponent {
    state = {
        openArticleId: null,
    }
    render(){
        const articleList = this.props.articles.map((art, index) => 
        <li key={art.id} className='article-list__li'>
        <Article article = {art} 
            isOpen = {this.state.openArticleId === art.id}
            onButtonClick = {this.handleClick.bind(this, art.id)} 
        />
        </li>
        )
    return (
        <ul>
            {articleList}
        </ul>
    )
    }

    handleClick = openArticleId => this.setState({ 
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
     })

}