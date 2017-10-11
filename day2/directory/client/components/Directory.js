import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
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
  { "fName": "Debi", "lName": "Ha", "number": "(310)-590-5299", "email": "whatup@korea.gov" },
  { "fName": "JiMin", "lName": "Ha", "number": "(310)-721-9277", "email": "intestines@korea.gov" }
];

const pplToFullLink = person => ({
    to: `/directory/${person.fName}/${person.lName}`,
    text: `${person.fName}. ${person.lName}`,
    key: person.number
});

class Directory extends React.Component {
  render() {
    return (
      <div>
        <h1>Horizons Directory</h1>
        <Form />
        <Switch>
          <Route path='/directory' component={LinkList}/>
          <Route path='/directory/:fName/:lName' component={Person}/>
        </Switch>
      </div>
    );
  }
};

const Form = () => {
  return(
    <form>
      <input type='text' name='fName' placeholder='First name'/>
      <input type='text' name='lName' placeholder='Last name'/>
      <input type='text' name='area' placeholder='Area'/>
      <input type='submit' value='Search'/>
    </form>
  )
}

const LinkList = ({ location }) => {
  const query = parse(location.search.substr(1));
  let links = ppl.map(pplToFullLink);
  Object.keys(query).forEach((key) => {
      console.log(links);
      switch(key){
        case 'fName':
          if(query.fName){
            links = ppl.filter(p => p.fName === query.fName).map(pplToFullLink)
          }
          return links;
        case 'lName':
          if(query.lName){
            links = ppl.filter(p => p.lName === query.lName).map(pplToFullLink)
          }
          return links;
        case 'area':
          if(query.area){
            links = ppl.filter(p => p.number.slice(1,4) === query.area).map(pplToFullLink)
          }
          return links;
        default:
          return links;
      }
    }
  )
    return (
        <ul>
          {links.map(link => (
            <li key={link.key}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
    )
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
        Too bad!!!
      </div>
    ) : (
      <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
    )
  }
}


export default Directory;
