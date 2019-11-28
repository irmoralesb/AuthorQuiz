import React from 'react';
import AuthorForm from './AuthorForm';
import "./AddAuthorForm.css";

class AddAuthorForm extends React.Component{

    render(){
        return(
            <AuthorForm onAddAuthor={this.props.onAddAuthor}/>
        )
    }
}

export default AddAuthorForm;