import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({ addItem }) => {
    const [text, setText] = useState('');

    const onChange = (val) => setText(val);
    return (
        <View>
            <TextInput style={styles.input} placeholder="Enter Item Name" onChangeText={onChange}></TextInput>
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btnText} >
                    <Icon name="plus" size={20} style={styles.icon} />
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#0096c7',
        padding: 8,
        margin: 5,
        borderRadius: 10,
    },
    btnText: {
        color: '#03045e',
        fontSize: 20,
        padding: 8,
        textAlign: 'center',
    }
    
});

export default AddItem;