import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';

interface ListItem {
  id: number;
  title: string;
  description: string;
}

const HomePage: React.FC = ({ navigation } : any) => {
  const initialData: ListItem[] = [
    { id: 1, title: 'Quiz 1', description: 'Quiz on Linux' },
    { id: 2, title: 'Quiz 2', description: 'Quiz on Coding' },
    { id: 3, title: 'Quiz 3', description: 'Quiz on SQL' },
    { id: 4, title: 'Quiz 4', description: 'Quiz on Docker' },
    { id: 5, title: 'Quiz 5', description: 'Mixed bag of questions' },
  ];

  const [data, setData] = useState(initialData);
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

  const toggleItemExpansion = (itemId: number) => {
    setExpandedItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  const renderItem = ({ item }: { item: ListItem }) => (
    <TouchableOpacity onPress={() => toggleItemExpansion(item.id)}>
      <View style={[styles.item, expandedItemId === item.id && styles.expandedItem]}>
        <Text style={styles.title}>{item.title}</Text>
        {expandedItemId === item.id && <Text style={styles.description}>{item.description}</Text>}
        {expandedItemId === item.id && <Button title="Attempt Quiz" onPress={() => handleButtonClick(item.id)} />}
      </View>
    </TouchableOpacity>
  );

  const handleButtonClick = (itemId: number) => {
    console.log('Button clicked for quiz:', itemId);
    navigation.navigate("Quiz", { id: itemId });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { marginTop: 20 }]}>Home Page</Text>
      <Text style = {styles.subHeading}>Quizzes</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    color: "#1434A4",
    fontSize: 30,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  subHeading:{
    fontSize: 24,
    color: "#1434A4"
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1434A4',
    
  },
  expandedItem: {
    borderWidth: 1,
    borderColor: '#1434A4',
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: "#E0E0E0"
  },
  title: {
    fontSize: 18,
  },
  description: {
    marginTop: 5,
    fontStyle: 'italic',
  },
});

export default HomePage;
