import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {mount,shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { stat } from 'fs';

Enzyme.configure({adapter: new Adapter()});

const state = {
  turnData: {
    books: ['The Shining', 'IT', 'David Copperfield', 'A Tale of Two Cities', 'Hamlet', 'Macbeth', 'Romeo and Juliet'],
    author: {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['David Copperfield', 'A Tale of Two Cities']
    },
  },
  highlight: 'none'
}


describe('Author Quiz', () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() => {}} />, div);
  })
});

describe("when no answer has been selected", ()=>{
  let wrapper;
  beforeAll(() => {
    wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={()=>{}}/>);
  })
  
  it("should have no background color", () => {
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("white");
  });
});

describe("when wrong answer has been selected",() => {
  let wrapper;
  beforeAll(() =>{
    wrapper = mount(<AuthorQuiz {...Object.assign({}, state, {highlight:'wrong'})} onAnswerSelected={() => {}} />);
  });
  it("should have red background", () => {
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("red");
  });
});

describe("when correct answer has been selected", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(<AuthorQuiz {...Object.assign({}, state, {highlight:'correct'})} onAnswerSelected={() => {}} />);
  });
  it("should have green background", () => {
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("green");
  });
});

describe("When the first answer is selected", () =>{
  let wrapper;
  const handleAnswertSelected = jest.fn();

  beforeAll(() => {
    wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={handleAnswertSelected} />);
    wrapper.find(".answer").first().simulate('click');
  });

  it("onAnswerSelected should be called", () => {
    expect(handleAnswertSelected).toHaveBeenCalled();
  });

});

describe("When the first answer is selected", () =>{
  let wrapper;
  const handleAnswertSelected = jest.fn();

  beforeAll(() => {
    wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={handleAnswertSelected} />);
    wrapper.find(".answer").first().simulate('click');
  });

  it("should receive The Shining", () => {
    expect(handleAnswertSelected).toHaveBeenCalledWith("The Shining");
  });

});
