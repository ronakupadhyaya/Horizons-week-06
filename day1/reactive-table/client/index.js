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
      originalBody: [[]],
      beenClicked: false,
      searchQuery: ''
    };
  },
  restore: function() {
    console.log('b4', this.state.originalBody);
    var old = this.state.originalBody;
    this.setState({
      body: old
    })
    console.log('later', this.state.originalBody);
  },
  search: function(e) {
    this.setState({
      searchQuery: e.target.value
    })
    var self = this;
    var results = [];
    self.state.body.filter(function(item) {
      console.log('ITEM: ', item);
      for (var i = 0; i < item.length; i++) {
        console.log('INSUDE: ', item[i]);
        return item[i].indexOf(e.target.value) !== -1;
      }
    })
    this.setState({
      body: results
    })
  },
  sort: function(event) {
    var index;
    var newBody;
    if (!this.state.beenClicked) {
      index = this.state.header.indexOf(event.target.innerText);
      newBody = this.state.body.sort(function(a,b) {
        if (a[index]>b[index]) return 1;
      })
      this.state.header[index] = this.state.header[index]+'▲';
      this.setState({body: newBody, beenClicked: true});
    } else {
      index = this.state.header.indexOf(event.target.innerText);
      newBody = this.state.body.sort(function(a,b) {
        if (b[index]>a[index]) return 1;
      })
      this.state.header[index] = this.state.header[index]+'▼';
      this.setState({body: newBody, beenClicked: false})
    }
  },
  onChange: function(val) {
    var self = this;
    parse(val, {delimiter: ','}, function(err, data) {
      if (err) {
        console.log('error parsing', err);
      } else {

        self.setState({
          text: data,
          header: data[0],
          body: data.slice(1),
          originalBody: data.slice(1)});
      }
    });
  },
  render: function() {
    return (
      <div>
      <form>
        <div className="form-group">
          <FileInput className="form-control" onChange={this.onChange} />
            <p className="help-block">Select a CSV file.</p>
        </div>
      </form>

      <div>
      <button className="btn btn-default" onClick={this.restore}>Restore order</button>
      </div>
      <p>Search</p>
      <input onChange={this.search} placeholder="Search for someone..."
      className="form-control" value={this.state.searchQuery}/>

      <table className="table">
        <thead>
          <tr>{this.state.header.map((item, i) => <th onClick={this.sort}>{item}</th>)}</tr>
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
