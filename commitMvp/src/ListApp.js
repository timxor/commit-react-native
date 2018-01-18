// import React, { Component } from 'react';
// import { StyleSheet, View,  ListView, Image, Text } from 'react-native';
// import data from './matches.json';
//
// const girl = require('./images/girl.png');
//
// /**
//     keep the state of the button when pressed.
// **/
// class ListApp extends Component {
//   constructor(props) {
//     super(props);
//     var ds = new ListView.DataSource({
//       rowHasChanged: (r1, r2) => r1 !== r2
//     });
//
//     this.state = {
//       dataSource: ds.cloneWithRows(data),
//     };
//   }
//
//   renderRow(record) {
//     return (
//       <View style={styles.row}>
//         <View style={styles.iconContainer}>
//           <Image source={girl} style={styles.icon} />
//         </View>
//         <View style={styles.info}>
//           <Text style={styles.matches}>{record.name} </Text>
//           <Text style={styles.price}>Age: {record.age}</Text>
//           <Text style={styles.address}>{record.miles} miles away</Text>
//           <Text style={styles.date}>body-type: {record.bodyType}</Text>
//
//         </View>
//         <View style={styles.total}>
//           <Text style={styles.date}>{record.height}</Text>
//           <Text style={styles.date}>{record.religion}</Text>
//           <Text style={styles.date}>{record.political}</Text>
//
//         </View>
//       </View>
//     );
//   }
//
//   render() {
//       return (
//       <View style={styles.mainContainer}>
//         <Text style={styles.title}>Matches</Text>
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={this.renderRow}
//         />
//       </View>
//     );
//
//   }
//   }
//
//   const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   title: {
//     backgroundColor: '#0f1b29',
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     padding: 10,
//     paddingTop: 40,
//     textAlign: 'center',
//   },
//   row: {
//     borderColor: '#f1f1f1',
//     borderBottomWidth: 1,
//     flexDirection: 'row',
//     marginLeft: 10,
//     marginRight: 10,
//     paddingTop: 20,
//     paddingBottom: 20,
//   },
//   iconContainer: {
//     alignItems: 'center',
//     backgroundColor: '#ffebf5',
//     borderColor: '#feaf12',
//     borderRadius: 25,
//     borderWidth: 1,
//     justifyContent: 'center',
//     height: 50,
//     width: 50,
//   },
//   icon: {
//     height: 50,
//     width: 50,
//   },
//   info: {
//     flex: 1,
//     paddingLeft: 25,
//     paddingRight: 25,
//   },
//   matches: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   address: {
//     color: '#ccc',
//     fontSize: 14,
//   },
//   total: {
//     width: 80,
//   },
//   date: {
//     fontSize: 12,
//     marginBottom: 5,
//   },
//   price: {
//     color: '#1cad61',
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   });
//
// /**
//     Export
// **/
// //export default ListApp;
