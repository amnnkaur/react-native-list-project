import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export default function City({ navigation }) {

    const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const countryName = data.city;
  useEffect(() => {
    fetch('https://freegeoip.app/json/')
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


  const renderItem = ({ item }) => (
    <TouchableOpacity 
    onPress={() => {
      /* 1. Navigate to the Details route with params */
      navigation.navigate('City', {
        itemId: countryName,
        otherParam: 'anything you want here',
      });
    }}>
    <Item title={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
  <SectionList
        sections={[
          {title: 'T', data: [countryName]},
        ]}
        renderItem={renderItem}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />

    
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
    backgroundColor: '#e0e0e0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  })