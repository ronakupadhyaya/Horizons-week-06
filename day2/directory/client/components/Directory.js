import React from 'react';
import { Switch,Route, Link } from 'react-router-dom';
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
  { "fName": "Darwish", "lName": "Gandhi", "number": "(124)-233-6755", "email": "saltypeace@india.gov" }

];

const pplToFullLink = person => ({
    to: `/subapp/directory/${person.fName}/${person.lName}`,
    text: `${person.fName} ${person.lName}`,
    key: person.number
});

class Directory extends React.Component {
  render() {
    return (
      <div>
        <h1>Horizons Directory</h1>
        {/*<Route exact path="/directory" render={() => <LinkList links={ppl.map(pplToFullLink)} />} />*/}
          {/*<Route exact path="/directory/:fName" render={(props) => <LinkList*/}
              {/*links={ppl*/}
                  {/*.filter(p => p.fName === props.match.params.fName)*/}
                  {/*.map(pplToFullLink)}*/}
          {/*/>} />*/}
        {/*<Switch>*/}
            {/*<Route exact path="/directory/surname/:lName" render=render={(props) => <LinkList*/}
                {/*links={ppl*/}
                    {/*.filter(p => p.lName === props.match.params.lName)*/}
                    {/*.map(pplToFullLink)}*/}
            {/*/>} />*/}
            {/*<Route exact path="/directory/areacode/:area" render=render={(props) => <LinkList*/}
                {/*links={ppl*/}
                    {/*.filter(p => p.lName === props.match.params.area)*/}
                    {/*.map(pplToFullLink)}*/}
            {/*/>} />*/}
        {/*</Switch>*/}

          <Route exact path="/subapp/directory" render={(props) => <LinkList links={ppl.filter(p => {
              const query = parse(location.search.substring(1));
              const fName = query.fName;
              const lName= query.lName;
              const area = query.area;
              const areaCode = p.number.split('-')[0].substring(1,4);
              return (!fName || fName === p.fName) && (!lName || lName === p.lName) && (!area || area === areaCode);
          }).map(pplToFullLink)} />} />
          <Route exact path="/subapp/directory/:fName/:lName" component={Person} />
      </div>
    );
  }
};

class LinkList extends React.Component {
  render() {
      console.log(this.props.links);
    return (
        <div>
            <ul>
              {this.props.links.map(link => (
                <li key={link.key}>
                  <Link to={link.to}>{link.text}</Link>
                </li>
              ))}
            </ul>
            {ppl.length!==this.props.links.length ? <Link to="/subapp/directory">Back to Listings</Link> : <div></div>}
        </div>
    );
  }
};

class Person extends React.Component {
  render() {
    // Array.prototype.find returns the first item satisfying the fn
    let person = ppl.find((p) => {
        return p.fName === this.props.match.params.fName && p.lName === this.props.match.params.lName
    });
    return person ? (
      <div>

        <h2>{`${person.fName} ${person.lName}`}</h2>
        <h3>{person.number}</h3>
        <h3>{person.email}</h3>

          <div>
            Not the {`${person.fName}`} you're looking for? {' '} <Link to={"/subapp/directory?fName=" + this.props.match.params.fName}>Find others.</Link>
          </div>
          <div>
            Looking for other people with the last name: {' '} {`${person.lName}`}? {' '} <Link to={"/subapp/directory?lName=" + person.lName}>Find them.</Link>
          </div>
          <div>
            Want to find other people with this area code? {' '} <Link to={"/subapp/directory?area=" + person.number.split('-')[0].substring(1,4)}>Find them.</Link>
          </div>
          <div>
            <Link to="/subapp/directory">Back to Listings</Link>
          </div>
      </div>
    ) : (
        <div>
            <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
            <Link to="/subapp/directory">Back to Listings</Link>
        </div>
    )
  }
}


export default Directory;
