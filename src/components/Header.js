// import libraries for making component
import React from 'react'
import {Text, View} from 'react-native'

//Make a Component
const Header = (props) => {
    const {textStyle, viewStyle} = styles
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>)
}


const styles = {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
}
//make the component available to other parts of the app
export default Header;
