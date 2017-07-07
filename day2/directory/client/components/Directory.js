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
    let input;
    return (
      <div>
        <h1>Horizons Directory</h1>
        <input type="text" placeholder="Search by Surname"
          ref={node => {input = node;}}/>
        {/* <Link to={"/directory/surname/"+input.value}> */}
          <input type="submit" value="search"/>
        {/* </Link> */}

        <Switch>
          {/* <Route path='/directory/surname/:lName' render={({match})=>
            <LinkList
              links={ppl
                .filter(p => p.lName === match.params.lName)
                .map(pplToFullLink)}
            />
          }/>
          <Route path='/directory/areacode/:CODE' render={({match})=>
              <LinkList
                links={ppl
                .filter(p => p.number.substring(1,4) === match.params.CODE.toString())
                .map(pplToFullLink)}
              />
          }/> */}
          <Route path='/directory/:fName/:lName' component={Person}/>
          <Route path='/directory/:fName' render={({match})=>
            <LinkList
              links={ppl
                .filter(p => p.fName === match.params.fName)
                .map(pplToFullLink)}
              />
          }/>
          <Route path='/directory' render={({location})=>{
            var queriesArr = location.search.substring(1).split('&').map(item=>item.split('='));
            var queries = {};
            queriesArr.forEach(array=>queries[array[0]]=array[1]);
            console.log(queries)
            return<LinkList
              links={ppl
                .filter(p => {
                  if (queries.hasOwnProperty('fName')){
                    return p.fName.toUpperCase() === queries.fName.toUpperCase()
                  }
                  return true;
                })
                .filter(p => {
                  if (queries.hasOwnProperty('lName')){
                    return p.lName.toUpperCase() === queries.lName.toUpperCase()
                  }
                  return true;
                })
                .filter(p => {
                  if (queries.hasOwnProperty('area')){
                    return p.number.substring(1,4) === queries.area.toString()
                  }
                  return true;
                })
                .map(pplToFullLink)}
            />
          }}/>
          <LinkList links={ppl.map(pplToFullLink)} />
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
        <Link to={'/directory/'+person.fName}>Find others</Link>
      </div>
    ) : (
      <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
    )
  }
}


export default Directory;
