import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons"
import { Checkbox } from "../Checkbox";

type TaskProps = {
  name: string,
  completed: boolean,
  onToggle: () => void,
  onRemove: () => void
}

export function Task({ name, onToggle, onRemove, completed }: TaskProps) {
  return (
    <View style={styles.container}>
      <Checkbox checked={completed} title={ name } onToggle={onToggle} />

      <TouchableOpacity 
          style={styles.button}
          onPress={onRemove}
        >
        <Text style={styles.buttonText}><Feather name="trash-2" size= {14} /></Text>
      </TouchableOpacity>
    </View>
  )
}