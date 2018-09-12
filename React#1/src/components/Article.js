import React, {Component} from 'react';

class Article extends Component {
    state = {
            isOpen: false,
        }

    render () {
        const {article} = this.props;
        const body = this.state.isOpen && <section className='card-text' style={{marginTop:'10px'}}>{article.text}</section>
        const date = <h6 className='card-subtitle text-muted'> creation date: {(new Date(article.date)).toDateString()}</h6>
        const buttonText = this.state.isOpen ? 'Close' : 'Open';
        const button = <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">{buttonText}</button>
        return (
            <div className='card mx-auto' style={{width: '80%'}}>
                <div className='card-header'>
                    <h2>
                    {article.title}
                    {button}
                    </h2>
                </div>
                <div className='card-body'>
                    {date}
                    {body}                   
                </div>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}   

export default Article