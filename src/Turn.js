import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types';

class Turn extends React.Component{

    highlightToBgColor = (highlight) => {
        const mapping = {
            'none' : 'white',
            'correct': 'green',
            'wrong': 'red'
        };
        return mapping[highlight];
    }

    render(){
        return(
            <div className="row turn" style={{backgroundColor:this.highlightToBgColor(this.props.highlight)}}>
                <div className="col-4 offset-1">
                    <img src={this.props.author.imageUrl} className="authorimage" alt="Author" />
                </div>
                <div className="col-6">
                    {this.props.books.map((title) => <Book title={title} key={title} onClick={this.props.onAnswerSelected} />)}
                </div>
            </div>
        );
    }
}

Turn.propType = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        imageSource: PropTypes.string.isRequired,
        books: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAnswerSelected:PropTypes.func.isRequired,
    highlight: PropTypes.string.isRequired
}

export default Turn;