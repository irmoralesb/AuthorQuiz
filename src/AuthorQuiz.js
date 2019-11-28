import React from 'react';
import './AuthorQuiz.css';
import './bootstrap.min.css';
import Hero from './Hero';
import Turn from './Turn';
import Continue from './Continue';
import Footer from './Footer';

class AuthorQuiz extends React.Component{

  render() {
    return(
      <div className="container-fuid">
        <Hero />
        <Turn data={this.props.turnData}/>
        <Continue />
        <Footer />
      </div>
    )}
}

export default AuthorQuiz;
