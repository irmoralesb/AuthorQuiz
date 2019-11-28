import React from 'react'
import Book from './Book'

class Turn extends React.Component{
    render(){
        return(
            <div className="row turn" style={{backgroundColor:"white"}}>
                <div className="col-4 offset-1">
                    <img src={this.props.data.author.imageUrl} className="authorimage" alt="Author" />
                </div>
                <div className="col-6">
                    {this.props.data.books.map((title) => <Book title={title} key={title} />)}
                </div>
            </div>
        );
    }
}

export default Turn;