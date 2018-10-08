/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import {Button, TouchableOpacity} from 'react-native';
type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);

    this.state = {
      departments: [],
      isFetchingData: false,
    };

    this.onRefresh = this.onRefresh.bind(this);
  }

  onRefresh(){
    console.log("Inside onRefresh");
    this.setState({isFetchingData: true}, function(){
      fetch('http://192.168.10.212:8000/departments')
      .then(response => response.json())
      .then(departments => {
        console.log(departments);
        this.setState({departments: JSON.parse(departments), isFetchingData: false});
      })
      .catch(error => {console.log(error)});
    });
  }

  componentDidMount(){
    fetch('http://192.168.10.212:8000/departments')
      .then(response => response.json())
      .then(departments => {
        this.setState({departments: JSON.parse(departments)});
      })
      .catch(error => {console.log(error)});
  }
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.h2text} > Student Application </Text>

        <FlatList data = {this.state.departments} showsVerticalScrollIndicator = {false}
          renderItem = {({item}) => 
            <View style = {styles.flatview}>
              <Text style = {styles.body} > {item.body} </Text>
              <View style = {styles.buttonContainer}>
                <View style = {styles.indiButton}>
                  <Button title = "View" color = 'blue' onPress = {() => {console.log("View")}} />
                </View>
                <View style = {styles.indiButton}>
                  <Button title = "Edit" color = 'black' onPress = {() => {console.log("Edit")}}/>
                </View>
                <View style = {styles.indiButton}>
                  <Button title = "Delete" color = 'red' onPress = {() => {console.log("Delete")}}/>
                </View>
              </View>
            </View>
          }
          keyExtractor = {(item, id) => id.toString()}
          onRefresh = {this.onRefresh}
          refreshing = {this.state.isFetchingData}
        />
        
        <TouchableOpacity style = {{height: 60, marginTop: 10, backgroundColor: 'darkseagreen', alignItems: 'center', justifyContent:'center'}} onPress = {() => {console.log("Add")}}>
          <Text style = {{fontSize: 24, fontWeight: 'bold', color: 'white'}}> Add Department </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
  },

  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  body: {
    fontFamily: 'Helvetica',
    fontSize: 24,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  indiButton: {
    flex: 1,
  }
});
