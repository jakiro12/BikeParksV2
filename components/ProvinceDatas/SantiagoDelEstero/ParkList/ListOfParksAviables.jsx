import { View,Text,ScrollView, TouchableOpacity,Image,Modal } from "react-native";
import styles from './styleList.js';
const {OpenMap,BikeParksData}=require('./MapParks');
import { useState } from "react";
export default function SeeAllParksInSantiagoDelEstero (){
    const[show,setShow] = useState('')
   
    return(
        <View style={styles.contianerList}>
            <ScrollView style={styles.scrollContainer} decelerationRate={0.9} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='never' contentContainerStyle={{alignItems:'center',paddingBottom:10}}>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>La Banda</Text>
                    <Text style={{color:'#ffffff'}}>Av San Martin</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.la_banda)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('la_banda')}>
                    <Image source={require('../../../ImagesExamples/SantiagoDelEstero/santi.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'la_banda' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/SantiagoDelEstero/santi.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            </ScrollView>
        </View>
    )
}