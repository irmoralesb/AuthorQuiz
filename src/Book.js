import React from 'react'

class Book extends React.Component{
    render(){
        return(
            <div className="answer" onClick={() => this.props.onClick(this.props.title)}>
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}

export default Book;