import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingLeft: 40,
    paddingRight: 40
  },
  header: {
    paddingTop: 24,
    marginLeft: -40,
    marginRight: -40,
    backgroundColor: "#0D0D0D"
  },
  logo: {
    width: 111,
    height: 32,
    marginTop: 40,
    marginBottom: 40,
    alignSelf: "center"
  },
  form: {
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: -28,
    flexDirection: "row"
  },
  input: {
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 5,
    color: '#F2F2F2',
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 7,
    borderStyle: "solid",
    borderColor: "#0D0D0D"
  },
  focusedInput: {
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 5,
    color: '#F2F2F2',
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 7,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#5E60CE"
  },
  buttonText: {
    color: '#F2F2F2',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  countersBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
    paddingBottom: 20
  },
  counterGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  createdTasks: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#4EA8DE"
  },
  completedTasks: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#8284FA"
  },
  bullet: {
    backgroundColor: "#333333",
    marginLeft: 10,
    borderRadius: 20,
    paddingLeft: 11,
    paddingRight: 11,
    height: 22,
  },
  counter: {
    color: "#D9D9D9",
    textAlign: "center",
    fontWeight: "bold"
  },
  taskListEmpty: {
    paddingTop: 48,
    textAlign: 'center',
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: "#333333",
  },
  clipboard: {
    width: 56,
    height: 56,
    marginBottom: 16,
    alignSelf: "center"
  },
  textBold: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#808080",
    textAlign: "center"
  },
  text: {
    fontSize: 14,
    color: "#808080",
    textAlign: "center"
  }
})