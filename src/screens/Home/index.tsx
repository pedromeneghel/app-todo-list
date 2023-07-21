import { Image } from "expo-image";
import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { v4 as uuid } from "uuid";
import { Task } from "../../components/Task";
import { styles } from "./styles";

type TaskProps = {
  id: string,
  task: string
}

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [taskToCreate, setTaskToCreate] = useState('');

  function handleTaskAdd() {
    if(taskToCreate.length <= 2) {
      return Alert.alert("Ops", "Descreva a tarefa que deseja adicionar");
    }

    setTasks(prevState => [...prevState, {
      id: uuid(),
      task: taskToCreate
    }]),
    setTaskToCreate('');
  }

  function handleTaskRemove(taskId: string) {
    Alert.alert('Remover', `Deseja realmente excluir essa tarefa?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task.id !== taskId))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleToggleTask(taskId: string) {
    if(completedTasks.includes(taskId)){
      setCompletedTasks(prevState => (
        prevState.filter(completedTask => completedTask !== taskId)
      ));

    } else {
      setCompletedTasks(prevState => [...prevState, taskId])
    }
  }

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />

        <View style={styles.form}>
          <TextInput 
            style={[
              styles.input,
              isFocused && styles.focusedInput,
            ]}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor="#808080"
            onChangeText={setTaskToCreate}
            value={taskToCreate}
            onFocus={handleFocus}
            onBlur={handleOnBlur}
          />

          <TouchableOpacity 
            style={styles.button}
            onPress={handleTaskAdd}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.countersBar}>
        <View style={styles.counterGroup}>
          <Text style={styles.createdTasks}>Criadas</Text>
          
          <View style={styles.bullet}>
            <Text style={styles.counter}>{tasks.length}</Text>
          </View>
        </View>
        <View style={styles.counterGroup}>
          <Text style={styles.completedTasks}>Concluídas</Text>

          <View style={styles.bullet}>
            <Text style={styles.counter}>{completedTasks.length}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Task 
              key={item.id} 
              name={item.task} 
              completed={completedTasks.includes(item.id)}
              onToggle={() => handleToggleTask(item.id)}
              onRemove={() => handleTaskRemove(item.id)} 
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.taskListEmpty}>
            <Image 
              source={require('../../../assets/clipboard.png')}
              style={styles.clipboard}
            />
            <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}
      />
    </View>
  )
}