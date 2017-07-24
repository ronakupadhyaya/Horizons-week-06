import React from 'react';

class TextBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <form>
          <input className="form-control" type="text" />
          <input type="submit" value="Submit"/>
        </form>
      );
    }
}

export default TextBox;
