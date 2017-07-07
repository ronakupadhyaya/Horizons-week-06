import React from 'react';
import { parse } from 'qs';
import { BrowserRouter, Route, Switch , Link } from 'react-router-dom';
import HangmanApp from '../../../hangman/app/components/App';
import Root from '../../../hangman/app/containers/Root.dev';
import history from '../../../hangman/app/store/configureStore.dev';
import configureStore from '../../../hangman/app/store/configureStore.dev';

import Home from './Home';
import { Directory, Person, LinkList, ppl, pplToFullLink } from './Directory';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Normally multiple routes can match at once.*/}
          {/* In a Switch, only the 1st matched route renders.*/}
          <Route path='/:else' render={() => <Link to='/'>Back to Home</Link>} />
          <br></br>
          <Route path='/:else' render={() => <Link to='/directory'>Back to Directory</Link>} />
          <Switch>

            <Route path='/directory/:fName/:lName' component={Person} />

            <Route path='/directory' render={(props) => <div><h1>Horizons Directory</h1><LinkList
              links={
                ppl.filter(p => {
                  const q = parse(props.location.search.substr(1));
                  if (!q.area) {
                    return true;
                  }
                  const area = p.number.slice(1, 4)
                  return (area === q.area)
                })
                .filter(p => {
                  const q = parse(props.location.search.substr(1));
                  if (!q.fName) {
                    return true;
                  }
                  return (p.fName === q.fName)
                })
                .filter(p => {
                  const q = parse(props.location.search.substr(1));
                  if (!q.lName) {
                    return true;
                  }
                  return (p.lName === q.lName)
                })
                .map(pplToFullLink)}
              /></div>}/>


            <Route path='/directory/areacode/:DigitAreaCode' render={(props) => <LinkList
              links={ppl
                .filter(p => {
                  const areaCode = p.number.slice(1, 4)
                  console.log(areaCode)
                  return (areaCode === props.match.params.DigitAreaCode)})
                .map(pplToFullLink)}
              />}/>

              <Route path='/directory/surname/:lName' render={(props) => <LinkList
                links={ppl
                  .filter(p => p.lName === props.match.params.lName)
                  .map(pplToFullLink)}
                />}/>

                <Route path='/directory/:fName' render={(props) => <LinkList
                  links={ppl
                    .filter(p => p.fName === props.match.params.fName)
                    .map(pplToFullLink)}
                  />} />
                <Route path='/hangman' component={HangmanApp} />

                  <Route exact path='/directory' component={Directory} />

                  <Route exact path='/' render={() =>
                    <div>
                      <Link to='/directory'>To Directory App</Link>
                      <Link to='/hangman'>To Hangman</Link>
                    </div>} />
                </Switch>
              </div>
            </BrowserRouter>
          );
        }
      };

      export default App;
