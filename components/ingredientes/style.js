import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#262626',
        width: '100%',
        height: '50%',
    },
    containerTitulo: {
        padding: 15,
    },
    titulo: {
        color: '#F2F2F2',
        fontSize: 20
    },
    subTitulo: {
        color: '#F2F2F2',
        fontSize: 20
    },
    containerItems: {
        flex: 1,
        // width: '80%',
        
    },
    item: {
        padding: 16,
        // flex: 1,
        color: '#F2F2F2',
        fontSize: 16,
        // justifyContent: 'space-around'
    },
    border: {
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 1,
    }

});

