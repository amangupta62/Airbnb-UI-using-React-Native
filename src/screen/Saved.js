import React from 'react';
import {View , StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from '../component/Spacer';

const Saved = () => {
    return <View>
        <Spacer />
        <Text h3 style={{marginLeft: 20}}>Saved</Text>
        <Spacer />
        <Text h4 style={{marginLeft: 20}}>Collect places to stay and things to do by tapping the heart icon.</Text>
    </View>
};

const styles = StyleSheet.create({

});

export default Saved;