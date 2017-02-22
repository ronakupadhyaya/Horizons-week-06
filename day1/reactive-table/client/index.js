var React = require('react');
var ReactDOM = require('react-dom');
var FileInput = require('./file-input');
var parse = require('csv-parse');

var App = React.createClass({
  getInitialState: function() {
    return {
      text: [[]],
      header:[],
      body:[[]],
      beenClicked: false
    };
  },
  sortIncrease: function(event) {
    var index = this.state.header.indexOf(event.target);
    var newBody = this.state.body.sort(function(a,b) {
      if (a[index]>b[index]) return 1;
    })
    this.setState({body: newBody, beenClicked: true})
  },
  sortDecrease: function(event) {
    var index = this.state.header.indexOf(event.target);
    var newBody = this.state.body.sort(function(a,b) {
      if (b[index]>a[index]) return 1;
    })
    this.setState({body: newBody, beenClicked: false})
  },
  onChange: function(val) {
    var self = this;
    parse(val, {delimiter: ','}, function(err, data) {
      if (err) {
        console.log('error parsing', err);
      } else {

        self.setState({text: data, header:data[0], body:data.slice(1)});
      }
    });
  },
  render: function() {
    console.log('***', sort);
    var sort;
    if (!this.state.beenClicked) {
      sort = this.sortIncrease;
    } else {
      sort = this.sortDecrease;
    }
    return (
      <div>
      <form>
        <div className="form-group">
          <FileInput className="form-control" onChange={this.onChange} />
            <p className="help-block">Select a CSV file.</p>
        </div>
      </form>

      <table className="table">
        <thead>
          <tr>{this.state.header.map((item) => <th><div onClick={this.sortDecrease}>▲</div>{item}</th>)}</tr>
        </thead>
        <tbody>
          {this.state.body.map((item, i) => <tr key={i}>{
            item.map((another, j) => <td key={j}>{another}</td>)}</tr>)}

        </tbody>
      </table>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('root'));
