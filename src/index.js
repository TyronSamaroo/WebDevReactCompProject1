import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
  return (
    <div className= "ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />    
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam 
          </a>
          <div className="metadata">
            <span className="data">Today at 6:00PM</span>
          </div>
          <div className="text">{faker.lorem.paragraph()}</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />    
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam 
          </a>
          <div className="metadata">
            <span className="data">Today at 6:00PM</span>
          </div>
          <div className="text">{faker.lorem.paragraph()}</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />    
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam 
          </a>
          <div className="metadata">
            <span className="data">Today at 6:00PM</span>
          </div>
          <div className="text">{faker.lorem.paragraph()}</div>
        </div>
      </div>
    </div>

  );
};

ReactDOM.render(<App />, document.getElementById('root'))