import { View,Text,ScrollView,TouchableOpacity,Image,Modal } from "react-native";
import styles from './styleList.js';
import { useState } from "react";
const {OpenMap,BikeParksData}=require('./MapParks')
export default function SeeAllParksInBuenosAires (){
    const[show,setShow] = useState('')
    return(
        <View style={styles.contianerList}>
          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='never' contentContainerStyle={{alignItems:'center',paddingBottom:10}}>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>San Nicolas de los Arroyos </Text>
                    <Text style={{color:'#ffffff'}}> Av Juan Domingo Peron</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.san_nicolas_de_los_arroyos)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('sannico')}>
                    <Image source={require('../../../ImagesExamples/BuenosAires/sannico.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'sannico' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/BuenosAires/sannico.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
          </ScrollView>
            </View>
    )
}