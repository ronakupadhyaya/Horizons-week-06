import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { parse } from 'qs';

const ppl = [
  { "fName": "Nihar", "lName": "Patil", "number": "(921)-664-2091", "email": "nihar@joinhorizons.com" },
  { "fName": "Nihar", "lName": "Harhar", "number": "(421)-666-2022", "email": "puppysmacker94@hotmail.com" },
  { "fName": "Nihar", "lName": "Kardashian", "number": "(608)-633-1254", "email": "kanyebae@tidal.com" },
  { "fName": "Graham", "lName": "Smith", "number": "(610)-256-6599", "email": "graham@joinhorizons.com" },
  { "fName": "Graham", "lName": "Slam", "number": "(611)-845-0967", "email": "cmonandslam@welcometothejam.com" },
  { "fName": "Graham", "lName": "Master", "number": "(612)-284-3678", "email": "senseibaybay@aol.com" },
  { "fName": "Graham", "lName": "Cracker", "number": "(616)-824-0567", "email": "cinnamonbear@yahoo.com" },
  { "fName": "Darwish", "lName": "Gani", "number": "(774)-123-6477", "email": "darwish@joinhorizons.com" },
  { "fName": "Darwish", "lName": "Gandhi", "number": "(124)-233-6755", "email": "saltypeace@india.gov" },
  { "fName": "Darwish2", "lName": "Gandhi2", "number": "(124)-233-6751", "email": "saltypeace@india.gov" }
];

const pplToFullLink = person => ({
    to: `/subapp/directoryApp/directory/${person.fName}/${person.lName}`,
    text: `${person.fName} ${person.lName}`,
    key: person.number
});

class Directory extends React.Component {
  constructor(props) {
    super(props);
  }

  helperFilter(location) {
    const query = parse(location.search.substr(1));
    const keys = Object.keys(query);
    let currPpl = ppl.slice();
    keys.forEach((key) => {
      if (key === "areacode") {
        currPpl = currPpl.filter(p => p.number.substring(1, 4) === query[key]);
      } else {
        currPpl = currPpl.filter(p => p[key] === query[key])
      }
    })
    return currPpl;
  }

  render() {
    return (
      <div>
        <Link to="/subapp/directoryApp">Back to Home</Link>
        <h1>Horizons Directory</h1>
        {/* { showing all of the people } */}
        <Route path="/subapp/directoryApp/directory" exact render={({location}) => <LinkList links={this.helperFilter(location).map(pplToFullLink)}/>} />

        <Switch>
          {/* {Filter by surname} */}
          {/* <Route exact path="/directory/surname/:lName" render={({match}) => <div> <LinkList links={ppl.filter(p => p.lName === match.params.lName).map(pplToFullLink)} /> <Link to="/directory" >Back to listings</Link> </div> } /> */}

          {/* {Filter by areacode} */}
          {/* <Route exact path="/directory/areacode/:THREEDIGITAREACODE" render={({match}) => <div> <LinkList links={ppl.filter(p => p.number.substring(1, 4) === match.params.THREEDIGITAREACODE).map(pplToFullLink)} /> <Link to="/directory" >Back to listings</Link> </div> } /> */}

          {/* {Display person with first name} */}
          {/* <Route exact path="/directory/:fName" render={({match}) => <div> <LinkList links={ppl.filter(p => p.fName === match.params.fName).map(pplToFullLink)} /> <Link to="/directory" >Back to listings</Link> </div> } /> */}

          {/* {Displaying one person} */}
          <Route exact path="/subapp/directoryApp/directory/:fName/:lName" component={Person} />
        </Switch>


      </div>
    );
  }
};

class LinkList extends React.Component {
  render() {
    return (
        <ul>
          {this.props.links.map(link => (
            <li key={link.key}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
    );
  }
};

class Person extends React.Component {
  render() {
    // Array.prototype.find returns the first item satisfying the fn
    const person = ppl.find(p => (
      p.fName === this.props.match.params.fName &&
      p.lName === this.props.match.params.lName
    ));

    return person ? (
      <div>
        <h2>{`${person.fName} ${person.lName}`}</h2>
        <h3>{person.number}</h3>
        <h3>{person.email}</h3>

        <p> Not the {`${person.fName}`} you're looking for? {' '} <Link to={"/subapp/directoryApp/directory/" + person.fName} >Find others</Link> </p>
        <Link to="/subapp/directoryApp/directory">Back to listings</Link>
        <br/>
        <Link to={"/subapp/directoryApp/directory?lName=" + person.lName}>Search People With Same Last Name</Link>
        <br/>
        <Link to={"/subapp/directoryApp/directory?areacode=" + person.number.substring(1, 4)}>Search People With Same Areacode</Link>
      </div>
    ) : (
      <div>
        <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
        <Link to="/subapp/directoryApp/directory">Back to listings</Link>
      </div>
    )
  }
}


export default Directory;
