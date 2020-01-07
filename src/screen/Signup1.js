import React from 'react';
import {View , StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Input} from 'react-native-elements';
import Spacer from '../component/Spacer';
import Icon from 'react-native-vector-icons/FontAwesome';

const Signup1 = ({ navigation }) => {
    return <View>
        <Text h3>Add Your Email Address</Text>
        <Spacer />
        <Spacer />
        <Input
        label="Email Address"
        placeholder="Enter Your Email Address"
        />

        <Spacer /> 

        <View style={styles.view}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Icon
                style={styles.icon}
                name='chevron-left'
                size={50}
                color='black'
            />
            </TouchableOpacity>
            <Spacer />
            <TouchableOpacity onPress={() => navigation.navigate('SignUp2')}>
            <Icon
                style={styles.icon}
                name='chevron-right'
                size={50}
                color='black'
            />
            </TouchableOpacity>
        </View>
    </View>
};

const styles = StyleSheet.create({
    icon: {
        marginTop: 50,
        marginLeft: 100
    },
    view: {
        flexDirection: 'row'
    }

});

export default Signup1;