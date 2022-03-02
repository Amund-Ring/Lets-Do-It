import AsyncStorage from '@react-native-async-storage/async-storage';

//Stores the given todoDB to local storage
const storeData = async todoDB => {
  try {
    const jsonValue = JSON.stringify(todoDB);
    await AsyncStorage.setItem('todoDB', jsonValue);
  } catch (error) {
    console.log(error);
  }
};

//Returns locally stored todoDB or null if todoDB has not been created
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('todoDB');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log(error);
  }
};

//Returns the todoDB from local storage or initializes a new one
const getTodos = async () => {
  const todoDB = await getData();

  if (!todoDB) {
    await storeData([]);
    return [];
  }

  return todoDB;
};

//Adds new todo to todoDB and returns updated todoDB
const storeTodo = async todo => {
  const todoDB = await getData();
  const updatedDB = [...todoDB, todo];
  await storeData(updatedDB);
  return updatedDB;
};

//Creates new todo, stores it and returns updated todoDB
const createNewTodo = async todoText => {
  const newTodo = {
    id: Date.now(),
    emoji: '🍦',
    description: todoText,
    completed: false
  };

  return await storeTodo(newTodo);
};

//Returns the todo with the specified id
const getTodo = async id => {
  const todoDB = await getTodos();
  return todoDB.filter(todo => todo.id == id);
};

//Toggles the completed state of todo with specified id
const toggleCompleted = async id => {
  const todo = await getTodo(id);

  const updatedTodo = {
    ...todo[0],
    completed: !todo[0].completed
  };

  const todoDB = await getTodos();
  const index = todoDB.findIndex(todo => todo.id == id);
  todoDB[index] = updatedTodo;
  await storeData(todoDB);
};

//Deletes the todo with the specified id and returns updated todoDB
const deleteTodo = async id => {
  const todoDB = await getTodos();
  const updatedTodoDB = todoDB.filter(todo => todo.id !== id);
  await storeData(updatedTodoDB);
  return updatedTodoDB;
};

const clearTodoDB = async () => await storeData([]);

export default {
  clearTodoDB,
  createNewTodo,
  deleteTodo,
  getTodos,
  storeData,
  toggleCompleted
};
