import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

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
          <Route exact={true} path = "/directory" render={() => <LinkList links={ppl.map(pplToFullLink)} />} />
          <Route
            exact={true}
            path = {"/directory/:fName"}
            render={({ match }) => {
              console.log(match.params.fName);
              return (<LinkList
              links={
                ppl.filter(p => p.fName === match.params.fName).map(pplToFullLink)
              } />)}
            }
          />
        <Switch>
          <Route
            exact={true}
            path = {"/directory/areacode/:areaCode"}
            render={({ match }) => {
              console.log(match.params.lName);
              return (<LinkList
              links={
                ppl.filter(p => p.number.slice(1,4) === match.params.areaCode).map(pplToFullLink)
              } />)}
            }
          />
          <Route
            exact={true}
            path = {"/directory/surname/:lName"}
            render={({ match }) => {
              console.log(match.params.lName);
              return (<LinkList
              links={
                ppl.filter(p => p.lName === match.params.lName).map(pplToFullLink)
              } />)}
            }
          />
          <Route path={this.props.match.url + "/:fName/:lName"} component={Person} />


        </Switch>
          <Route exact={true} path ={this.props.match.url + "/:fName/:lName"} render={() => <Link to="/directory"> Back to Listings </Link>}/>

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

    console.log(this.props.match.url);
    return person ? (
      <div>
        <h2>{`${person.fName} ${person.lName}`}</h2>
        <h3>{person.number}</h3>
        <h3>{person.email}</h3>

        Not the {`${person.fName}`} you're looking for? {' '}
        <Route
          exact={true}
          path={"/directory/:fName/:lName"}
          render={()=> <Link to={"/directory/" + this.props.match.params.fName}>Find Others</Link>}
        />
      </div>
    ) : (
      <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
    )
  }
}


export default Directory;
