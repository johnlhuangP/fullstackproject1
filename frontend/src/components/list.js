import React, { useState, useEffect } from 'react';
import { VStack, Input, Button, List, ListItem } from '@chakra-ui/react';
import './list.css';
import Axios from 'axios';


const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
  
    const handleAddTask = async () => {
        if (task) {
          try {
            const response = await Axios.post('http://localhost:5005/api/tasks', {
              text: task,
              completed: false,
            });
            setTasks([...tasks, response.data.text]);
            setTask('');
          } catch (error) {
            console.error('Error adding task:', error);
          }
        }
      };
      useEffect(() => {
        const fetchTasks = async () => {
          try {
            const response = await Axios.get('http://localhost:5005/api/tasks');
            setTasks(response.data);
          } catch (error) {
            console.error('Error fetching tasks:', error);
          }
        };
      
        fetchTasks();
      }, []);  
  
    return (
      <VStack spacing={4} align="center" width="300px" mt={10}>
        <Input
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          size="lg"
          width="80%"
        />
        <Button colorScheme="teal" onClick={handleAddTask}>
          Add Task
        </Button>
        <List width="80%">
            {tasks.map((task, index) => (
                <ListItem key={index} borderBottom="1px solid #ccc">
                    {task}
                </ListItem>
            ))}
        </List>
      </VStack>
    );
  };
  
  export default TodoList;
  