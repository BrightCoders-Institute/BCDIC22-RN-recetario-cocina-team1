import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  trending:{
    backgroundColor: 'grey',
    width: '100%',
    height: '40%',
  },
  letraComida: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'Bold',
  },
  titleTrending: {
		color: '#B5067B',
    fontSize: 25,
    fontStyle: 'arial',
  },
	menucontainer: {
    flexDirection: 'row',
    backgroundColor: 'green',
    alignItems: 'flex-start',
	},
	foodContainer: {
		width: 180,
		height: 200,
    backgroundColor: 'grey',
		alignItems: 'center',
    justifyContent: 'center',
	},

	foodimg: {
    alignItems: 'center',
		width: 160,
		height: 150,
    backgroundColor: 'yellow',
    borderRadius: 15,
	}

});
