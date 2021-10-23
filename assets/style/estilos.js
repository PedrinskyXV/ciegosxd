import { StyleSheet } from "react-native";

var bgPrincipal = "#EAF1F4";
var colorPrin = "#e84444";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgPrincipal,
    padding: 35,
  },
  containerCentrado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgPrincipal,
  },
  btnLogin: {
    height: 50,
    backgroundColor: colorPrin,
    color: "#f8f8ff",
    alignContent: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  logoContainer: {
    padding: 25,
  },
  navbar: {
    backgroundColor: colorPrin,
    color: '#f8f8ff'
  },
  bannerAlert: {
    backgroundColor: "#f4a39f",
    height: 32,    
  },
  bannerMsj: {
    color: "#3e3939",
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
