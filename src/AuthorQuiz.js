import React from 'react';
import './AuthorQuiz.css';
import './bootstrap.min.css';
import Hero from './Hero';
import Turn from './Turn';
import Continue from './Continue';
import Footer from './Footer';

class AuthorQuiz extends React.Component{

  
  render() {
    const turnData = this.props.turnData;
    return(
      <div className="container-fuid">
        <Hero />
        <Turn {...turnData} highlight={this.props.highlight} onAnswerSelected={this.props.onAnswerSelected}/>
        <Continue />
        <Footer />
      </div>
    )}
}

export default AuthorQuiz;
