import { View,Text,ScrollView, TouchableOpacity,Image,Modal } from "react-native";
import styles from './styleList.js';
const {OpenMap,BikeParksData}=require('./MapParks');
import { useState } from "react";
export default function SeeAllParksInChubut (){
    const[show,setShow] = useState('')
   
    return(
        <View style={styles.contianerList}>
            <ScrollView style={styles.scrollContainer} decelerationRate={0.9} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='never' contentContainerStyle={{alignItems:'center',paddingBottom:10}}>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Comodoro Rivadavia </Text>
                    <Text style={{color:'#ffffff'}}>Plaza Soberania</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.comodoro_rivadavia_1)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('comodoro_rivadavia_1')}>
                    <Image source={require('../../../ImagesExamples/Chubut/como1.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'comodoro_rivadavia_1' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Chubut/como1.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Comodoro Rivadavia </Text>
                    <Text style={{color:'#ffffff'}}>Av Patricios</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.comodoro_rivadavia_1)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('comodoro_rivadavia_2')}>
                    <Image source={require('../../../ImagesExamples/Chubut/como2.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'comodoro_rivadavia_2' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Chubut/como2.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Esquel </Text>
                    <Text style={{color:'#ffffff'}}>Libertad 750</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.esquel)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('esquel')}>
                    <Image source={require('../../../ImagesExamples/Chubut/esquel.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'esquel' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Chubut/esquel.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Lago Pueblo </Text>
                    <Text style={{color:'#ffffff'}}>Mutisias</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.lago_pueblo)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('lago_pueblo')}>
                    <Image source={require('../../../ImagesExamples/Chubut/lago.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'lago_pueblo' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Chubut/lago.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Rada Tilly </Text>
                    <Text style={{color:'#ffffff'}}>Av Automovil Club Arg</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.rada_tilly)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('rada_tilly')}>
                    <Image source={require('../../../ImagesExamples/Chubut/rada.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'rada_tilly' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Chubut/rada.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Trevelin </Text>
                    <Text style={{color:'#ffffff'}}>Brown</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.trevelin)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('trevelin')}>
                    <Image source={require('../../../ImagesExamples/Chubut/trevelin.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'trevelin' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Chubut/trevelin.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Trelew </Text>
                    <Text style={{color:'#ffffff'}}>Rondeau</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.trelew)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('trelew')}>
                    <Image source={require('../../../ImagesExamples/Chubut/trelew.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'trelew' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Chubut/trelew.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            </ScrollView>
        </View>
    )
}