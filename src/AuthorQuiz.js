import React from 'react';
import {Link} from 'react-router-dom';
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
        <Continue show={this.props.highlight === 'correct'} onContinue={this.props.onContinue} />
        <p><Link to="/add">Add an author</Link> </p>
        <Footer />
      </div>
    )}
}

export default AuthorQuiz;
