import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';

describe('Author Quiz', () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz />, div);
  })
});
