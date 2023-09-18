import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import TodoList from './components/list';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <h1>Simple To-Do List</h1>
        <TodoList />
      </div>
    </ChakraProvider>
  );
}

export default App;
