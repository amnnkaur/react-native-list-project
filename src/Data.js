import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Province from './Province';
import City from './City';

function Menu({ navigation }) {

    const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const countryName = data.country_name;
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
      navigation.navigate('Province', {
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
          {title: 'C', data: [countryName]},
        ]}
        renderItem={renderItem}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />

    
    </View>
  );
}



const Stack = createStackNavigator();

export default function App() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Country" component={Menu} />
        <Stack.Screen name="Province" component={Province} />
        <Stack.Screen name="City" component={City}/>
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
  })