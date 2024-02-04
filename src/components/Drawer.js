
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Drawer = ({navigation}) => {
  return (
    <View style={styles.drawerView}>
        <TouchableOpacity style={styles.openDrawerBtn} onPress={() => navigation.openDrawer()}>
            <Image style={styles.openDrawerImage} source={require('../assets/icons/hamburger-large.png')}/>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    drawerView: {
        position: 'absolute',
        left: 20,
        top: 10,
    },
    openDrawerBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 50/2,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openDrawerImage:{
      width:35,
      height:35,
    }
});


export default Drawer;