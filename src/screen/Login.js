import React, {useState} from 'react';
import {View , StyleSheet} from 'react-native';
import {Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spacer from '../component/Spacer';

const Login = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    return <View>
        <Text h2>Login</Text>
        <Text h4 style={{marginLeft: 200, color: 'red'}}>Forgot Password?</Text>
        <Spacer />
        <View style={styles.view}>
        <Input
            label="Email"
            value={email}
            placeholder='Enter Your Email'
            onChangeText={setemail}
            leftIcon={
                <Icon
                name='user'
                size={24}
                color='black'
                />
            }
        />

        <Spacer />

        <Input
            label="Password"
            value={password}
            placeholder='Enter Your Password'
            onChangeText={setpassword}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            leftIcon={
                <Icon
                name='lock'
                size={24}
                color='black'
                />
            }
        />
        </View>
        <Spacer />
        <Icon
            style={styles.icon}
            name='chevron-right'
            size={50}
            color='black'
        />
    </View>
};

const styles = StyleSheet.create({
    view: {
        marginVertical: 50,
        alignContent: 'center',
        alignItems: 'center'
    },
    icon: {
        marginLeft: 300
    }
});

export default Login;