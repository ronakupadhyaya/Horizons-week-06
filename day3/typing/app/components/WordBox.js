import React from 'react';

class WordBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="container" >
          <div className="wordBox" >
              <span className="correct">hi</span> <span className="wrong">bye</span> placeholder
          </div>
        </div>
      );
    }
}

export default WordBox;
