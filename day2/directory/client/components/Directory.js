import React from 'react';
import {  Switch, Route, Link } from 'react-router-dom';
import {parse} from 'qs';
const ppl = [
  { "fName": "Nihar", "lName": "Patil", "number": "(921)-664-2091", "email": "nihar@joinhorizons.com" },
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

        <Route exact path="/directory" render={({location}) => {
          var location = parse(location.search.substr(1));
          if(location){
            var newArr = [...ppl];
            var links;
            for(var key in location){
              if(key === 'areacode'){
                links = newArr.filter(p => p["number"].slice(1, 4) === location[key]);
              }  else{
                links = newArr.filter(p => p[key] === location[key]);

              }
              newArr = links;
            }
            return <LinkList links={newArr.map(pplToFullLink)} />
          }
          return <LinkList links={ppl.map(pplToFullLink)} />

        }} />

        <Route exact path="/directory/:fName" render={({match}) => {
            console.log("HIm", match);
            return(
              <LinkList
                links={ppl
                  .filter(p => p.fName === match.params.fName)
                  .map(pplToFullLink)}
              />
            )
          }
        } />

        <Route path="/directory/:anything" render={() => (<Link to="/directory"> Back to Listings </Link>)} />
        <Switch>
        <Route exact path="/directory/surname/:lName" render={({match}) => {
          return(
            <LinkList
              links={ppl
                .filter(p => p.lName === match.params.lName)
                .map(pplToFullLink)}
            />
          )
        }} />
        <Route exact path="/directory/areacode/:areacode" render={({match}) => {

          return(
            <LinkList
              links={ppl
                .filter(p => p.number.slice(1,4) === match.params.areacode)
                .map(pplToFullLink)}
            />
          )
        }} />
          <Route exact path="/directory/:fName/:lName" component={Person} />
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

        Not the {`${person.fName}`} you're looking for? {' '}
        <Link to={'/directory/' + person.fName}> Check others here </Link>

      </div>
    ) : (
      <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
    )
  }
}


export default Directory;
