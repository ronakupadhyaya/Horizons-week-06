import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

const ppl = [
  { "fName": "Nihar", "lName": "Patil", "number": "(921)-664-2091", "email": "nihar@joinhorizons.com", areaCode: "325" },
  { "fName": "Nihar", "lName": "Harhar", "number": "(421)-666-2022", "email": "puppysmacker94@hotmail.com", areaCode: "767" },
  { "fName": "Nihar", "lName": "Kardashian", "number": "(608)-633-1254", "email": "kanyebae@tidal.com", areaCode: "325" },
  { "fName": "Graham", "lName": "Smith", "number": "(610)-256-6599", "email": "graham@joinhorizons.com", areaCode: "999" },
  { "fName": "Graham", "lName": "Slam", "number": "(611)-845-0967", "email": "cmonandslam@welcometothejam.com", areaCode: "454" },
  { "fName": "Graham", "lName": "Master", "number": "(612)-284-3678", "email": "senseibaybay@aol.com", areaCode: "456" },
  { "fName": "Graham", "lName": "Cracker", "number": "(616)-824-0567", "email": "cinnamonbear@yahoo.com", areaCode: "234" },
  { "fName": "Darwish", "lName": "Gani", "number": "(774)-123-6477", "email": "darwish@joinhorizons.com", areaCode: "234" },
  { "fName": "Darwish", "lName": "Gandhi", "number": "(124)-233-6755", "email": "saltypeace@india.gov", areaCode: "325" }

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
		<Switch>
			<Route path="/directory/areacode/:areaCode" render={({match}) => <LinkList links={ppl.filter(p =>
				{
					console.log(p.areaCode);
					if(p.areaCode === match.params.areaCode){
						console.log(p);
					}
					return p.areaCode === match.params.areaCode;
				}
			)
			.map(pplToFullLink)}/>}/>

			<Route path="/directory/surname/:lName" render={({match}) => <LinkList links={ppl.filter(p =>
				{
					console.log(match);
					return p.lName === match.params.lName;
				}
			)
			.map(pplToFullLink)}/>}/>

			<Route path="/directory/:fName/:lName" exact={true} component={Person} />


			<Route path="/directory/:fName" render={({match}) => <LinkList links={ppl.filter(p =>
				{
					console.log(this.match);
					return p.fName === match.params.fName;
				}
			)
			.map(pplToFullLink)}/>}/>

		  <Route path="/directory" exact={true} render={() => <LinkList links={ppl.map(pplToFullLink)} />}/>


	</Switch>


		<Route path="/directory/:backtodir" render={() => (<Link to="/directory"> Back to listings </Link>)} />
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
        <Link to={'/directory/' + person.fName}>Find others</Link>
      </div>
    ) : (
      <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
    )
  }
}


export default Directory;
