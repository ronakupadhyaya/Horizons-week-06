import React from 'react';
import {Route, Link, Switch } from 'react-router-dom';

const ppl = [
  { "fName": "Nihar", "lName": "Patil", "number": "(921)-664-2091", "email": "nihar@joinhorizons.com" },
  { "fName": "Pam", "lName": "Needle", "number": "(516)-426-1057", "email": "pneedle@colgate.edu" },
  { "fName": "Pam", "lName": "Notneedle", "number": "(516)-333-3333", "email": "pneedle1@colgate.edu" },
  { "fName": "Greg", "lName": "Needle", "number": "(516)-384-1464", "email": "gneedle@gmail.com" },
  { "fName": "Robin", "lName": "Needle", "number": "(516)-641-6845", "email": "rneedle@gmail.com" },
  { "fName": "Nihar", "lName": "Harhar", "number": "(421)-666-2022", "email": "puppysmacker94@hotmail.com" },
  { "fName": "Nihar", "lName": "Kardashian", "number": "(608)-633-1254", "email": "kanyebae@tidal.com" },
  { "fName": "Graham", "lName": "Smith", "number": "(610)-256-6599", "email": "graham@joinhorizons.com" },
  { "fName": "Graham", "lName": "Slam", "number": "(611)-845-0967", "email": "cmonandslam@welcometothejam.com" },
  { "fName": "Graham", "lName": "Master", "number": "(612)-284-3678", "email": "senseibaybay@aol.com" },
  { "fName": "Graham", "lName": "Cracker", "number": "(616)-824-0567", "email": "cinnamonbear@yahoo.com" },
  { "fName": "Darwish", "lName": "Gani", "number": "(774)-123-6477", "email": "darwish@joinhorizons.com" },
  { "fName": "Darwish", "lName": "Gandhi", "number": "(124)-233-6755", "email": "saltypeace@india.gov" }

];

const pplToFullLink = person => ({
    to: `/directory/${person.fName}/${person.lName}`,
    text: `${person.fName} ${person.lName}`,
    key: person.number
});

class Directory extends React.Component {
  render() {
    return (
      <div>
          <h1>Horizons Directory</h1>
          <Route path="/directory/:any" render={() => <Link to="/directory">Back To Listings</Link>}/>

          <Route exact={true} path="/directory" render={ () => <LinkList links={ppl.map(pplToFullLink)}></LinkList>}/>
          <Switch>
              <Route path="/directory/surname/:lName" render={ (props) => <LinkList links={ppl.filter( (person) => person.lName === props.match.params.lName).map(pplToFullLink)}></LinkList>}/>

              <Route path="/directory/areacode/:code" render={ (props) => <LinkList links={ppl.filter( (person) => person.number.slice(1,4) === props.match.params.code).map(pplToFullLink)}></LinkList>}/>



              <Route path="/directory/:fName" render={ (props) => <LinkList links={ppl.filter( (person) => person.fName === props.match.params.fName).map(pplToFullLink)}></LinkList>}/>

              <Route path="/directory/:fName/:lName" component={Person} />


          </Switch>
      </div>
    );
  }
};

class LinkList extends React.Component {
  render() {
    return (
        <div>
            <ul>
                {/* <Route path="/directory/:fName/:lName" component={Person} /> */}
                {this.props.links.map(link => (
                    <li key={link.key}>
                        <Link to={link.to}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
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

          Not the {`${person.fName}`} you're looking for? {' '}
          <Link to={`/directory/${person.fName}`} >Try here</Link>
      </div>
    ) : (
      <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
    )
  }
}


export default Directory;
