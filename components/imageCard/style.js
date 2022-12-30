import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',
        backgroundColor: "black"
      },
      image: {
        flex: 1,
        justifyContent: "center",
        opacity: 0.8,
        
      },
      containerInterno: {
        flex: 1,
        backgroundColor: "#000000c0",
        justifyContent: 'space-between'
      },
      btnExit:{
        margin: 20,
        padding: 20
      },
      text: {
        color: "white",
        fontSize: 20,
        lineHeight: 35,
        padding: 8
        // backgroundColor: "#000000c0"
      },
      textPlato: {
        color: "white",
        fontSize: 24,
        lineHeight: 35,
        padding: 8,
        paddingBottom: 16,
        marginBottom: 10
      },
      containerIconos: {
        flexDirection: 'row',
      },
      
      
});