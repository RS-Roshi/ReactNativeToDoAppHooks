import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
// import { uuid } from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem';
import { v4 as uuidv4 } from 'uuid';
import AddItem from './components/AddItem';


const App = () => {
	const [items, setItems] = useState([
		{ id: uuidv4(), name: 'Apple' },
		{ id: uuidv4(), name: 'Banana' },
		{ id: uuidv4(), name: 'Grapes' },
	]);

	const deleteItem = (id) => {
		console.log(id);
		setItems(items => {
			return items.filter(item => item.id != id);
		})
	};

	const addItem = (textInput) => {
		setItems(items => {
			if (!textInput) {
				Alert.alert('Error!', 'Item cannot be empty');
				return items;

			} else {

				return [{ id: uuidv4(), name: textInput }, ...items]
			}
		});
	}
	return (
		<View style={styles.container}>
			<Header title="ToDo List" />

			<AddItem addItem={addItem} />
			<FlatList
				data={items}
				renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
			/>
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

export default App;