import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width

const header = StyleSheet.create({
  // estilização dos componentes Header e Header2 //
  background: {
    width: width,
    flex: 1
  },
  areaMenu: {
    flex: 1,
    backgroundColor: '#FF0000',
    flexDirection: 'row',
    height: 40
  },
  iconMenu: {
    left: 5,
    top: 3
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    top: 5
  },
  iconSearch: {
    top: 3
  },
  banner: {
    width: 360,
    height: 220
  }
})

const main = StyleSheet.create({
  // estilização da página Index //
  background: {
    width: width,
    flex: 1
  },
  buttonArea: {
    alignItems: 'center',
    margin: 100
  },
  button: {
    backgroundColor: '#FF4500',
    width: 250,
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  },

  // estilização da página Mock //
  description: {
    fontSize: 16,
    textAlign: 'center',
    top: 200
  }
})

export { header, main }
