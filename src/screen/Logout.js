import React from 'react';
import {View , StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { Avatar, Text, Button, ListItem, Icon} from 'react-native-elements';
import Spacer from '../component/Spacer';

const Logout = () => {

    const list = [
        {
            title: 'Personal Information',
            icon:'user'
        },
        {
            title: 'Payments and Payouts',
            icon:'credit-card'
        },
        {
            title: 'Notifications',
            icon:'bell'
        },
        {
            title: 'Travel for Work',
            icon:'trello'
        },
    ];

    const list1 = [
        {
            title: 'List Your Space',
            icon:'user'
        },
        {
            title: 'Learn About Hosting',
            icon:'credit-card'
        },
        {
            title: 'Host an expirience',
            icon:'bell'
        },
    ];

    const list2 = [
        {
            title: 'Invite friends',
            icon:'user'
        },
        {
            title: 'Refer a host',
            icon:'credit-card'
        },
    ];

    const list3 = [
        {
            title: 'Safety Center',
            icon:'user'
        },
        {
            title: 'Contact Neighbourhood Support',
            icon:'credit-card'
        },
        {
            title: 'Get hepl',
            icon:'bell'
        },
        {
            title: 'Give us feedback',
            icon:'trello'
        },
    ];

    const list4 = [
        {
            title: 'Terms of service',
            icon:'user'
        },
        {
            title: 'Logout',
            icon:'user'
        },
        {
            title: 'Switch Account',
            icon:'bell'
        },
    ];

    return <View style={styles.view1}>
        
        <SafeAreaView>    
        <ScrollView style={styles.scrollView}> 
        <Spacer />
        <View  style={styles.view2}>
            <Avatar
                rounded
                size='large'
                source={
                    require('../../asset/aham.jpg')
                }
            />
            <Spacer />
            
            <View>

                <Text h4>Aham Bramhasm</Text>
                <Button 
                type="clear"
                title="View Profile"
                />

            </View>
        </View>

           
        <View>
            <Text h5 style={styles.lst}>ACCOUNT SETTING</Text>
            {
                list.map((item,i) => (
                    <ListItem
                    key={i}
                    title={item.title}
                    rightIcon={{ name: item.icon}}
                    bottomDivider
                    chevron                    
                    />
                ))
            }

            <Text h5 style={styles.lst}>HOSTING</Text>
            {
                list1.map((item,i) => (
                    <ListItem
                    key={i}
                    title={item.title}
                    rightIcon={{ name: item.icon}}
                    bottomDivider
                    chevron                    
                    />
                ))
            }

            <Text h5 style={styles.lst}>REFERRALS  CREDITS</Text>
            {
                list2.map((item,i) => (
                    <ListItem
                    key={i}
                    title={item.title}
                    rightIcon={{ name: item.icon}}
                    bottomDivider
                    chevron 
                    onp                   
                    />
                ))
            }

        <Text h5 style={styles.lst}>SUPPORT</Text>
            {
                list3.map((item,i) => (
                    <ListItem
                    key={i}
                    title={item.title}
                    rightIcon={{ name: item.icon}}
                    bottomDivider
                    chevron                    
                    />
                ))
            }

        <Text h5 style={styles.lst}>LEGAL</Text>
            {
                list4.map((item,i) => (
                    <ListItem
                    key={i}
                    title={item.title}
                    rightIcon={{ name: item.icon}}
                    bottomDivider
                    chevron                    
                    />
                ))
            }

        <Text style={{marginHorizontal: 100}}>Version 1.0.0 (2017010)</Text>
          
        </View>  
        </ScrollView>
        </SafeAreaView>    
            
    </View>
};

const styles = StyleSheet.create({
    view1: {
        marginHorizontal: 10,
        borderColor:'black',
        borderBottomWidth: 1,
        borderRadius: 5
        
    },
    view2: {
        flexDirection: "row"
    },
    lst: {
        marginVertical: 15,
        marginLeft: 15
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 0,
      }

});

export default Logout;