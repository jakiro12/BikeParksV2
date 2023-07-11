import { View,Text,ScrollView, TouchableOpacity,Image,Modal } from "react-native";
import styles from './styleList.js';
const {OpenMap,BikeParksData}=require('./MapParks');
import { useState } from "react";
export default function SeeAllParksInEntreRios (){
    const[show,setShow] = useState('')
   
    return(
        <View style={styles.contianerList}>
            <ScrollView style={styles.scrollContainer} decelerationRate={0.9} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='never' contentContainerStyle={{alignItems:'center',paddingBottom:10}}>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Concepcion de Uruguay</Text>
                    <Text style={{color:'#ffffff'}}>Parque integrador Brian</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.concepcion_del_uruguay)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('concepcion_del_uruguay')}>
                    <Image source={require('../../../ImagesExamples/Entrerios/concepcion.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'concepcion_del_uruguay' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Entrerios/concepcion.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Concordia</Text>
                    <Text style={{color:'#ffffff'}}>Av del Rio</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.concordia)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('concordia')}>
                    <Image source={require('../../../ImagesExamples/Entrerios/concordia.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'concordia' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Entrerios/concordia.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Diamante</Text>
                    <Text style={{color:'#ffffff'}}>Almirante Brown 700</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.diamante)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('diamante')}>
                    <Image source={require('../../../ImagesExamples/Entrerios/diamante.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'diamante' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Entrerios/diamante.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Gualeguay</Text>
                    <Text style={{color:'#ffffff'}}>Av Costanera</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.gualeguay)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('gualeguay')}>
                    <Image source={require('../../../ImagesExamples/Entrerios/gualeguay.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'gualeguay' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Entrerios/gualeguay.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Gualeguaychu</Text>
                    <Text style={{color:'#ffffff'}}>Belisario Roldan 500</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.gualeguaychu)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('gualeguaychu')}>
                    <Image source={require('../../../ImagesExamples/Entrerios/gualeguaychu.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'gualeguaychu' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Entrerios/gualeguaychu.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Libertador de San Martin</Text>
                    <Text style={{color:'#ffffff'}}>Ramon Isasi</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.libertador_san_martin)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('libertador_san_martin')}>
                    <Image source={require('../../../ImagesExamples/Entrerios/san.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'libertador_san_martin' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Entrerios/san.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Parana</Text>
                    <Text style={{color:'#ffffff'}}>Costanera</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.parana)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('parana')}>
                    <Image source={require('../../../ImagesExamples/Entrerios/parana.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'parana' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Entrerios/parana.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Segui</Text>
                    <Text style={{color:'#ffffff'}}>Sargento Cabral</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.segui)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('segui')}>
                    <Image source={require('../../../ImagesExamples/Entrerios/segui.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'segui' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Entrerios/segui.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Villaguay</Text>
                    <Text style={{color:'#ffffff'}}>Av Raul Alfonsin 1984</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.villaguay)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('villaguay')}>
                    <Image source={require('../../../ImagesExamples/Entrerios/villa.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'villaguay' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/Entrerios/villa.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            </ScrollView>
        </View>
    )
}