import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, SectionList, TouchableOpacity, ActivityIndicator, FlatList, Button, Alert } from 'react-native';


export default function SubHome1({ route, navigation }) {

    const  {itemId } = route.params;
    const {itemData} = route.params;
    const [isLoading, setLoading] = useState(true);

    
    const name = itemId
    const dataValue = itemData
        
    const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );



  const renderItem = ({ item }) => (
    <TouchableOpacity 
    onPress={() => {
      /* 1. Navigate to the Details route with params */
      navigation.navigate('Address Details', {
        itemId: item.id,
        itemData: dataValue,
        otherParam: 'anything you want here',
      });
    }}>
    <Item title={item} />
    </TouchableOpacity>
  );

  
 

if(name == 1234){
    const telephone = dataValue[0].telephone;
    const address = dataValue[0].address.street +dataValue[0].address.city + dataValue[0].address.zipcode;
    const department = dataValue[0].department.name
  return (
    <View style={styles.container}>
      
        <Button 
          onPress={() => Alert.alert('Do you want to call ?' +telephone)}
        title = {"Telephone: "+telephone}></Button>

<Button style={styles.customBtnBG}
 onPress={() => {
    /* 1. Navigate to the Details route with params */
    navigation.navigate('Address Details', {
      itemId: name,
      itemData: dataValue,
      otherParam: 'anything you want here',
    });
  }}
        title = {"Find his location📍"}></Button>

<Button 
        title = {"Department: "+department}></Button>
    
    
  </View>
  );
    }else if (name == 2345){
        const telephone = dataValue[1].telephone;
    const address = dataValue[1].address.street +dataValue[0].address.city + dataValue[0].address.zipcode;
    const department = dataValue[1].department.name
      return (
        <View style={styles.container}>
   <Button onPress={() => Alert.alert('Do you want to call ?' +telephone)}
        title = {"Telephone: "+telephone}></Button>

<Button style={styles.customBtnBG}
 onPress={() => {
    /* 1. Navigate to the Details route with params */
    navigation.navigate('Address Details', {
      itemId: name,
      itemData: dataValue,
      otherParam: 'anything you want here',
    });
  }}
        title = {"Find his location📍"}></Button>

<Button 
        title = {"Department: "+department}></Button>
    
     
      </View>
      );
    }else if (name == 3456){
        const telephone = dataValue[2].telephone;
    const address = dataValue[2].address.street +dataValue[0].address.city + dataValue[0].address.zipcode;
    // const department = dataValue[2].department.name
      return (
        <View style={styles.container}>
       
       <Button onPress={() => Alert.alert('Do you want to call ?' +telephone)}
        title = {"Telephone: "+telephone}></Button>

<Button style={styles.customBtnBG}
 onPress={() => {
    /* 1. Navigate to the Details route with params */
    navigation.navigate('Address Details', {
      itemId: name,
      itemData: dataValue,
      otherParam: 'anything you want here',
    });
  }}
        title = {"Find his location📍"}></Button>

{/* <Button 
        title = {"Department: "+department}></Button> */}
    
      </View>
      );
    }
    return (
      <View style={styles.container}>
    <Text>No Data Found</Text>
      </View>
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
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  customBtnBG: {
    backgroundColor: "#007aff",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30
    }
  })
