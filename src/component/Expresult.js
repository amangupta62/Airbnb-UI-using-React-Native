import React from 'react';
import {View , StyleSheet, FlatList, Image} from 'react-native';
import { Text } from 'react-native-elements';

const Expresult = ( {title, dat }) => {
    // console.log(dat);
    // console.log(title)
    return <View style={styles.container}>
        <Text h3>
            {title}            
        </Text>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dat}
        keyExtractor={dat => dat.id}
        renderItem = {({ item }) => {
            let imgurl= item.image;
            // console.log(imgurl);
            
        return <View style={styles.container}>
        <Image style={styles.im} source={imgurl} />
        <Text h4>{item.name}</Text>
        </View>
        }}
        />
    </View>
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    im: {
        height: 200,
        width:300,
        borderRadius:15,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: { width: 10, height: 10}
    }
});

export default Expresult;