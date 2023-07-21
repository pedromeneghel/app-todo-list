import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center"
  },
  checked: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#5E60CE",
    marginRight: 11
  },
  unChecked: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#4EA8DE",
    marginRight: 11
  },
  checkedTitle: {
    flex: 1,
    color: '#808080',
    fontSize: 14,
    textDecorationLine: "line-through"
  },
  unCheckedTitle: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14
  },
  buttonText: {
    color: '#808080',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    textAlign: "center",
    marginTop: 3
  }
})