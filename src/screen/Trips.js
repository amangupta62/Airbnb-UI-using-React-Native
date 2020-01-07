import React from 'react';
import {View , StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-elements';
import Spacer from '../component/Spacer';

const Trips = ({navigation}) => {
    return <View >
        <Spacer />
        <Text h3 style={{marginLeft: 20}}>Where To?</Text>
        <Spacer />
        <Text h4 style={{marginLeft: 20}}>Start Planning your first adventure trip!!</Text>
        <Spacer />

        < View style={styles.tx} >
            <TouchableOpacity>
                <Text h4 style={styles.txx}>Explore</Text>
            </TouchableOpacity>
        </View>
        
        {/* <Button 
        title="Explore"
        type="outline"
        onPress={() => navigation.navigate('Explore')}
        /> */}
    </View>
};

const styles = StyleSheet.create({
    tx: {
        borderWidth: 2,
        borderColor: 'blue',
        marginHorizontal: 130
    },
    txx: {
        color: 'blue',
        marginHorizontal: 30
    }

});

export default Trips;