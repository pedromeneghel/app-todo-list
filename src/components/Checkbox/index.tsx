import { Feather } from "@expo/vector-icons";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
  onToggle: () => void;
}

export function Checkbox({ onToggle, title, checked = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity= { 0.7 }
      style={styles.container}
      onPress = {onToggle}
      {...rest }
    >
      {
        checked?(
          <>
            <View style={styles.checked}>
              <Feather name="check" size = { 15 } color="#F2F2F2" style={styles.icon} />
            </View>

            <Text style={styles.checkedTitle}> { title } </ Text>
          </>
        ): (
          <>
            <View style={styles.unChecked} />
            <Text style={styles.unCheckedTitle}> { title } </ Text>
          </>
        )
      }
    </ TouchableOpacity>
  );
}
