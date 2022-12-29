import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  trending: {
    backgroundColor: '#282828',
    width: '100%',
    height: '40%',
  },
  letraContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  letraComida: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'arial',
  },
  titleTrending: {
    color: '#B5067B',
    fontSize: 25,
    fontStyle: 'arial',
  },
  menucontainer: {
    flexDirection: 'row',
    backgroundColor: '#282828',
    alignItems: 'center',
  },
  foodContainer: {
    width: 190,
    height: 300,
    backgroundColor: '#282828',
    alignItems: 'flex-start',
    margin: 15,
    justifyContent: 'center',
  },

  foodimg: {
    alignItems: 'center',
    width: 160,
    height: 150,
    backgroundColor: 'yellow',
    borderRadius: 15,
  },
});
