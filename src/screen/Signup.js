import React from 'react';
import {View , StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Input} from 'react-native-elements';
import Spacer from '../component/Spacer';
import Icon from 'react-native-vector-icons/FontAwesome';

const Signup = ({ navigation }) => {
    return <View>
        <Text h3>What's Your Name</Text>
        <Spacer />
        <Spacer />
        <Input
        label="First Name"
        placeholder="Enter Your First Name"
        />

        <Spacer />

         <Input
        label="Last Name"
        placeholder="Enter Your Last Name"
        />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp1')}>
        <Icon
            style={styles.icon}
            name='chevron-right'
            size={50}
            color='black'
        />
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
    icon: {
        marginTop: 50,
        marginLeft: 300
    }

});

export default Signup;