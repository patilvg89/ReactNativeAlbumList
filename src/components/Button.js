// import libraries for making component
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

//Make a Component
const Button = ({onPress, children}) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};


const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aaf',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aaf',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

//make the component available to other parts of the app
export default Button;