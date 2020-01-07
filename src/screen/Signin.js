import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spacer from '../component/Spacer';

const Signin = ({ navigation }) => {
    return <View style={styles.view}>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>      
        <Text style={styles.logg}>Log in</Text>
        </TouchableOpacity>
        
        <Icon style={styles.iconn}
        name= "tripadvisor"
        size={50}
        />
        <Spacer />
       

        <Text h3 style={styles.text}>Welcome To Airbnb.</Text>

        <Spacer />

        <View style={styles.button}>

            <TouchableOpacity style={styles.to} onPress={() => navigation.navigate('mainarea')}>
                <Icon
                style={styles.ic}
                    name= "facebook-f"
                    size={25}
                    color="white"
                />            
                <Text  h4 style={styles.ta}>Continew With Facebook</Text>
            </TouchableOpacity>

            {/* <Button
            icon={
                <Icon
                name= "facebook-square"
                size={30}
                color="#008489"
                />            
            }
            
            title = "Continew With Facebook"
            type="outine"
            onPress={()=>navigation.navigate('mainarea')}
            /> */}
        </View>

        <Spacer />
        
        <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text  h4 style={styles.te}>Create Account</Text>
            </TouchableOpacity>
        </View>
        

        <Spacer />
        
        <Text style={styles.tool}> More Option</Text>

        <Spacer />

        <Text style={styles.xt}>By signing up, I agree to Travel Hubs <Text style={styles.weigh}> Terms of Service. Non-Discrimination Policy, Guest Refund Policy,</Text>  and <Text style={styles.weigh}> Host Guarantee Terms </Text> </Text>
    
    </View>
};

Signin.navigationOptions = () => {
    return {
    header: null
    };
 };

const styles = StyleSheet.create({
    iconn: {
        marginHorizontal: 15,
        marginVertical: 10,
        color: 'white'
    },
    text: {
        marginHorizontal: 15,
        color: 'white'
    },
    textt: {
        marginHorizontal: 15,
        color: 'white',
        fontSize: 20,
        alignSelf:'center',
        alignContent: 'center',
        },
    tc: {
        fontSize: 20,
        color: 'white',
        marginHorizontal: 120
    },
    view: {
        flex: 1,
         alignContent: 'center',
        // alignItems: 'center',
        backgroundColor:'#008489'
    },
    viewi: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        // marginVertical: 50
    },
    button: {
        backgroundColor: '#008489',
        marginHorizontal: 30,
        borderRadius:50,
        borderColor: 'white',
        borderWidth: 2,
        },
    logg: {
        marginLeft: 310,
        marginTop: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: "bold"
    },
    tool: {
        marginLeft:15,
        fontSize: 20,
        color: 'white'
    },
    weigh: {
        textDecorationLine: 'underline'
    },
    te: {
        marginHorizontal: 70,
        color: 'white'
    },
    xt: {
        marginTop: 100,
        marginHorizontal: 15,
        color: 'white',
        fontSize: 20,
    },
    ta: {
        marginHorizontal: 20,
        color: 'white'
    },
    to: {
        flexDirection: 'row'
    },
    ic: {
        marginLeft: 20,
        marginTop: 5
    }

});

export default Signin;