
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const ToDoSection: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('bleameTasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('bleameTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim() === '') {
      alert('You must write something!');
      return;
    }
    
    const newTask: Task = {
      id: Date.now().toString(),
      text: inputValue,
      completed: false
    };
    
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-purple/90 to-purple-dark py-12">
      <motion.div 
        className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold text-dark-purple flex items-center mb-5">
          To-Do List 
          <span className="ml-2 bg-purple-lighter p-1 rounded-md">
            <CheckCircle className="w-5 h-5 text-purple" />
          </span>
        </h2>
        
        <div className="flex items-center bg-gray-100 rounded-full px-4 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add your task..."
            className="flex-1 py-3 bg-transparent border-none focus:outline-none text-sm"
          />
          <button
            onClick={addTask}
            className="ml-2 bg-purple text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-purple-dark transition-colors"
          >
            Add
          </button>
        </div>
        
        <ul className="space-y-2 max-h-[250px] overflow-y-auto">
          {tasks.map((task) => (
            <motion.li
              key={task.id}
              className={cn(
                "flex items-center py-2 px-3 rounded-lg relative cursor-pointer hover:bg-gray-50",
                task.completed && "text-gray-500"
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              whileHover={{ scale: 1.01 }}
            >
              <button 
                onClick={() => toggleTask(task.id)}
                className="mr-3 flex-shrink-0"
              >
                {task.completed ? (
                  <CheckCircle className="w-5 h-5 text-purple fill-purple" />
                ) : (
                  <Circle className="w-5 h-5 text-purple" />
                )}
              </button>
              
              <span className={cn(
                "flex-1 text-sm",
                task.completed && "line-through"
              )}>
                {task.text}
              </span>
              
              <button 
                onClick={() => deleteTask(task.id)}
                className="ml-2 p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </motion.li>
          ))}
          
          {tasks.length === 0 && (
            <p className="text-center text-gray-400 text-sm py-4">
              No tasks yet! Add some to get started.
            </p>
          )}
        </ul>
      </motion.div>
    </section>
  );
};

export default ToDoSection;
