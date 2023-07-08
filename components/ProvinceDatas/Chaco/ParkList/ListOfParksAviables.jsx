import { View,Text,ScrollView, TouchableOpacity,Image,Modal } from "react-native";
import styles from './styleList.js';
const {OpenMap,BikeParksData}=require('./MapParks');
import { useState } from "react";
export default function SeeAllParksInChaco (){
    const[show,setShow] = useState('')
   
    return(
        <View style={styles.contianerList}>
            <ScrollView style={styles.scrollContainer} decelerationRate={0.9} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='never' contentContainerStyle={{alignItems:'center',paddingBottom:10}}>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Charata </Text>
                    <Text style={{color:'#ffffff'}}>Av Belgrano 540</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.charata)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('charata')}>
                    <Image source={require('../../../ImagesExamples/Chaco/charata.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'charata' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Chaco/charata.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Las Breñas </Text>
                    <Text style={{color:'#ffffff'}}>Av Belgrano 1179</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.las_brenas)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('las_brenas')}>
                    <Image source={require('../../../ImagesExamples/Chaco/las_brenas.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'las_brenas' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Chaco/las_brenas.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Resistencia </Text>
                    <Text style={{color:'#ffffff'}}>Parque Tiro Federal</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.resistencia)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('resistencia')}>
                    <Image source={require('../../../ImagesExamples/Chaco/resistencia.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'resistencia' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Chaco/resistencia.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Saenz Peña </Text>
                    <Text style={{color:'#ffffff'}}>San Luis 310</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.saenz_pena)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('saenz_pena')}>
                    <Image source={require('../../../ImagesExamples/Chaco/saenz.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'saenz_pena' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Chaco/saenz.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            </ScrollView>
        </View>
    )
}