import { View,Text,ScrollView, TouchableOpacity,Image,Modal } from "react-native";
import styles from './styleList.js';
const {OpenMap,BikeParksData}=require('./MapParks');
import { useState } from "react";
export default function SeeAllParksInCaba (){
    const[show,setShow] = useState('')
    return(
        <View style={styles.contianerList}>
            <ScrollView style={styles.scrollContainer} decelerationRate={0.9} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='never' contentContainerStyle={{alignItems:'center',paddingBottom:10}}>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Almagro </Text>
                    <Text style={{color:'#ffffff'}}>Parque Centenario</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.almagro)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('almagro')}>
                    <Image source={require('../../../ImagesExamples/Caba/almagro.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'almagro' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Caba/almagro.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Barrio Norte </Text>
                    <Text style={{color:'#ffffff'}}>Av Cordoba 2351</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.barrio_norte)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('barrio_norte')}>
                    <Image source={require('../../../ImagesExamples/Caba/barrionorte.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'barrio_norte' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Caba/barrionorte.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Villa Real </Text>
                    <Text style={{color:'#ffffff'}}>Moliere 2701</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.villa_real)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('villareal')}>
                    <Image source={require('../../../ImagesExamples/Caba/villareal.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'villareal' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Caba/villareal.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
          
            </ScrollView>
            </View>
    )
}