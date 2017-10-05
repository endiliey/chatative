import React from 'react'; 
import { Text, View } from 'react-native'; 
import { Colors, Styles } from './Shared';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: Colors.secondaryColor,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 24
  }
};

export default Header;

