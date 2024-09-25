import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Interest from '../../../Utils/Interest.json';

export default function Intereses({ handleInterestChange }) {
    const [selectedInterests, setSelectedInterests] = useState({});

    const toggleInterestSelection = (interest) => {
        const isSelected = !selectedInterests[interest];
        const updatedSelection = { ...selectedInterests, [interest]: isSelected };
        setSelectedInterests(updatedSelection);
        if (handleInterestChange) {
            handleInterestChange(interest, isSelected);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.interestItem,
                selectedInterests[item] && styles.selectedInterestItem,
            ]}
            onPress={() => toggleInterestSelection(item)}
        >
            <Text style={styles.interestText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.sectionInterest}>
            <Text style={styles.headerText}>Intereses</Text>
            <FlatList
                data={Interest.interest}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2} // Cambia este número para ajustar el número de columnas
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionInterest: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    listContainer: {
        justifyContent: 'space-between',
    },
    interestItem: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: '#d00281',
        borderRadius: 5,
        alignItems: 'center',
    },
    selectedInterestItem: {
        backgroundColor: '#d00281',
    },
    interestText: {
        color: '#000',
    },
});