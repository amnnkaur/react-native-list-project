import React, { useEffect, useState } from 'react';
import {ActivityIndicator, View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import UserDetails from './UserDetails';
import AddressDetails from './AddressDetails';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import SubHome2 from './SubHome2';

function Home({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);



const selected = true;
 
  useEffect(() => {
      
    fetch('https://raw.githubusercontent.com/amnnkaur/employee-json/main/File')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

//   setisSelected(false);

// const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
//     const color = item.id === selectedId ? 'white' : 'black';

  const renderItem = ({ item }) => (
    
    <TouchableOpacity 
   
    onPress={() => {
      /* 1. Navigate to the Details route with params */
      navigation.navigate('User Details', {
        itemId: item.id,
        itemData: data,
        otherParam: 'anything you want here',
      });
     
    }}>
    <Item 
    style = {selected ? styles.flatListSelected : styles.flatListNotSelected}
    title={item.name} />
    </TouchableOpacity>
  );

  

    return (
      
      <View style={styles.container}>

      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => data}
         
        />
      )}
   
    </View>
    );
  }

  const Stack = createStackNavigator();

export default function App() {
  
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="User Details" component={UserDetails} />
        <Stack.Screen name="Address Details" component={AddressDetails} />
      
      </Stack.Navigator>
   
  );
}
  const styles = StyleSheet.create({
    container: {
     flex: 1,
   
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
   item: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  flatListSelected :{
  backgroundColor: '#000000',

  },
  flatListNotSelected :{
    backgroundColor: '#e0e0e0',
  
    },
  })

