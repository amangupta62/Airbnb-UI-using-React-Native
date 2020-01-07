import React from 'react';
import {View , StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../component/Spacer';
import Icon from 'react-native-vector-icons/FontAwesome';

const Signup2 = ({ navigation }) => {
    return <View>
        <Text h3>Set Your Password</Text>
        <Spacer />
        <Spacer />
        <Input
        label="Password"
        placeholder="Enter Your Password"
        />

        <Spacer />

         <Input
        label="Confirm Password"
        placeholder="Confirm Your Password"
        />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp1')}>
        <Icon
            style={styles.icon}
            name='chevron-left'
            size={50}
            color='black'
        />
        </TouchableOpacity>
        <Button 
        title="Create Account"
        type="clear"        
        />

    </View>
};

const styles = StyleSheet.create({
    icon: {
        marginTop: 50,
        marginLeft: 30
    }

});

export default Signup2;