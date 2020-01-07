import React from 'react';
import {View , StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from '../component/Spacer';

const Inbox = () => {
    return <View>
        <Spacer />
        <Text h3 style={{marginLeft: 20}}>Inbox</Text>
        <Spacer />
        <Text h4 style={{marginLeft: 20}}>Messages from your host will appera here</Text>
    </View>
};

const styles = StyleSheet.create({

});

export default Inbox;