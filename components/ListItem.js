import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon  from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{item.name}</Text>
            <Text style={styles.listItemHint}>{item.id}</Text>
            <Icon name="remove" size={20} color="#E7505A" onPress={() => deleteItem(item.id)} />
        </View>
      </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItemText: {
      fontSize: 18,
  },
  listItemHint: {
    fontSize: 10,
  }
});

export default ListItem;