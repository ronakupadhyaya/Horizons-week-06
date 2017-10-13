import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, DataSource, ListView } from 'react-native';
import _ from 'underscore';
import { StackNavigator } from 'react-navigation';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      // numbers: _.range(100)
      // products: [0, 1, 2, 3]
    };
  }

// press(item) {
//   this.setState({
//     numbers: this.state.numbers.filter((curItem) => (item != curItem))
//   });
// }
//
// add() {
//   const copy = this.state.numbers.slice();
//   const nextNum = copy[copy.length-1] + 1;
//   copy.push(nextNum);
//   this.setState({numbers: copy})
// }
//
// remove() {
//   const copy = this.state.numbers.slice();
//   copy.pop();
//   this.setState({numbers: copy})
// }

  // componentDidMount() {
  //   fetch('https://horizons-json-cors.s3.amazonaws.com/products.json')
  //   .then((resp) => (resp._bodyText))
  //   .then((resp2) => console.log(resp2))
  // }

  static navigationOptions = (props) => ({
    title: 'Home Page',
    headerRight: <TouchableOpacity onPress={() => (props.navigation.navigate('Page2'))}><Text>Page 2</Text></TouchableOpacity>
  })
  render() {
    // var dataSource = new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => (r1 !== r2)
    // });
    return (
      <View style={styles.box1}>
        <TouchableOpacity onPress={() => (this.props.navigation.navigate('Page2'))}>
          <Text>Go to Page 2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Second extends React.Component {
  static navigationOptions = (props) => ({
    title: 'Page 2',
    headerRight: <TouchableOpacity onPress={() => (props.navigation.navigate('Page3'))}><Text>Page 3</Text></TouchableOpacity>
  })
  render(){
    return (
      <View style={styles.box2}>
        <TouchableOpacity>
          <Text>Welcome to Page 2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Third extends React.Component {
  static navigationOptions = (props) => ({
    title: 'Page 3',
  })
  render(){
    return (
      <View style={styles.box3}>
        <TouchableOpacity>
          <Text>Welcome to Page 3</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Navigator = StackNavigator({
  Home: {screen: App},
  Page2: {screen: Second},
  Page3: {screen: Third}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  black: {
    color: 'black',
    fontSize: 20,
  },
  white:{
    color: 'white',
    fontSize: 40,
  },
  button1: {
    fontSize: 50,
  },
});


export default Navigator;
