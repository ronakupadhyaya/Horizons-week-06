import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

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

function Directory (props) {
    return (
        <div>
            <h1>Horizons Directory</h1>
            <Switch>
                <Route path="/directory/surname/:lname" render={({match}) =>
                    <LinkList links={match.params.lname} /> } />
                <Route path="/directory/:fname/:lname" component={Person} />
                {/* <Route path="/directory/:fname" render={() =>
                    <LinkList links={['fName']} /> } /> */}
                <Route exact path="/directory" render={() =>
                    <LinkList links={ppl.map(pplToFullLink)} /> } />
            </Switch>
        </div>
    );
};

function LinkList (props) {
    console.log("MATCH in link", props);
    // let newLinks;
    // if (this.props.match.params.fname) {
    //     newLinks = ppl.filter((person) => {return person.fName === this.props.match.params.fname});
    // }
    let links = props.links;
    if (typeof props.links[0] === "string" ) {
        const name = props.links[0];
        links = ppl.filter((person) => {return person[name] === name})
    }
    return (
        <ul>
          {links.map(link => (
            <li key={link.key}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
    );
};

function Person (props) {
     console.log(props.match.params);
    // Array.prototype.find returns the first item satisfying the fn
    const person = ppl.find(p => (
        p.fName === props.match.params.fname &&
        p.lName === props.match.params.lname
    ));

    return person ? (
        <div>
            <h2>{`${person.fName} ${person.lName}`}</h2>
            <h3>{person.number}</h3>
            <h3>{person.email}</h3>
        </div>
    ) : (
        <h3> No contact found. Link back to directory to search for others </h3>
    )
}


export default Directory;
