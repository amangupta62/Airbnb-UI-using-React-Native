import React, {useState} from 'react';
import {View , StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Spacer from '../component/Spacer';
import Expresult from '../component/Expresult';
const Explore = () => {

    const [search, setsearch] = useState('');

    const b = [
        {
            id: 1,
            image: require('../../asset/b1.jpeg'),
            name: "Spiti Valley"
        },
        {
            id: 2,
            image: require('../../asset/b2.jpeg'),
            name: "Parvati Valley"
        },
        {
            id: 3,
            image: require('../../asset/b3.jpeg'),
            name: "Rohtang Valley"
        },
        {
            id: 4,
            image: require('../../asset/b4.jpeg'),
            name: "Tosh Valley"
        },
        {
            id: 5,
            image: require('../../asset/b5.jpeg'),
            name: "Manali"
        },

    ];

    const a = [
        {
            id: 1,
            image: require('../../asset/a1.jpg'),
            name: "Allahabad"
        },
        {
            id: 2,
            image: require('../../asset/a2.jpg'),
            name: "Naini Bridge"
        },
        {
            id: 3,
            image: require('../../asset/a3.jpg'),
            name: "Arail Ghat"
        },
        {
            id: 4,
            image: require('../../asset/a4.jpg'),
            name: "Tosh Valley"
        },
        {
            id: 5,
            image: require('../../asset/a5.jpeg'),
            name: "Chandratal Lake"
        },

    ];

    const p = [
        {
            id: 1,
            image: require('../../asset/p1.jpeg'),
            name: "Lachain"
        },
        {
            id: 2,
            image: require('../../asset/p2.jpeg'),
            name: "Darjeeling"
        },
        {
            id: 3,
            image: require('../../asset/p3.jpeg'),
            name: "Yumthang Valley"
        },
        {
            id: 4,
            image: require('../../asset/p4.jpeg'),
            name: "Nathula Pass"
        },
        {
            id: 5,
            image: require('../../asset/p5.jpeg'),
            name: "Tsongo Lake"
        },

    ];

    const q = [
        {
            id: 1,
            image: require('../../asset/q1.jpeg'),
            name: "Dehradoon"
        },
        {
            id: 2,
            image: require('../../asset/q2.jpeg'),
            name: "Nainital"
        },
        {
            id: 3,
            image: require('../../asset/q3.jpeg'),
            name: "Mussoori"
        },
        {
            id: 4,
            image: require('../../asset/q4.jpeg'),
            name: "Shimla"
        },
        {
            id: 5,
            image: require('../../asset/q5.jpeg'),
            name: "Laddhak"
        },

    ];

    return <View >

        <SearchBar 
        style={{margin: 20}}
        round="default"
        placeholder="Enter Your Search"
        value={search}
        onChangeText={setsearch}
        />
        
        <Spacer />
        <SafeAreaView >
        <ScrollView style={styles.scrollView}>   

        <Expresult title=" What can we help you find?" dat={[...b]} />
        <Spacer />                              
        <Expresult title="Top rated experiences" dat={[...a]} />
        <Spacer />
        <Expresult title="Travel Plus places to stay" dat={[...p]}/>
        <Spacer />
        <Expresult title="Places to Stay around the World" dat={[...q]}/>
        <Spacer />
        <Expresult title="Introducing Travel Adventures" />
        <Spacer />

        </ScrollView>
        </SafeAreaView>
    </View>
};

const styles = StyleSheet.create({

      scrollView: {
        backgroundColor: 'white',
        // marginHorizontal: 20,
      },
      container: {
        marginLeft: 15
    }
});

export default Explore;