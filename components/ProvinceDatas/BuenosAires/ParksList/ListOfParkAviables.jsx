import { View,Text,ScrollView,TouchableOpacity,Image,Modal } from "react-native";
import styles from './styleList.js';
import { useState } from "react";
const {OpenMap,BikeParksData}=require('./MapParks')
export default function SeeAllParksInBuenosAires (){
    const[show,setShow] = useState('')
    return(
        <View style={styles.contianerList}>
          <ScrollView style={styles.scrollContainer} decelerationRate={0.8} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='never' contentContainerStyle={{alignItems:'center',paddingBottom:10}}>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Acasusso </Text>
                    <Text style={{color:'#ffffff'}}> Peru 1450</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.acasusso)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('acasusso')}>
                    <Image source={require('../../../ImagesExamples/BuenosAires/acasuso.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'acasusso' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/BuenosAires/acasuso.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Avellaneda </Text>
                    <Text style={{color:'#ffffff'}}> Obreros de la Negra 150</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.avellaneda)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('avellaneda')}>
                    <Image source={require('../../../ImagesExamples/BuenosAires/avellaneda.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'avellaneda' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/BuenosAires/avellaneda.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Alto Avellaneda </Text>
                    <Text style={{color:'#ffffff'}}> Limay 300</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.alto_avellaneda)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('alto_avellaneda')}>
                    <Image source={require('../../../ImagesExamples/BuenosAires/altoavella.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'alto_avellaneda' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/BuenosAires/altoavella.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Azul </Text>
                    <Text style={{color:'#ffffff'}}>Av Bartolome mitre</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.azul)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('azul')}>
                    <Image source={require('../../../ImagesExamples/BuenosAires/azul.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'azul' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/BuenosAires/azul.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Bernal </Text>
                    <Text style={{color:'#ffffff'}}>Liniers 1810</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.bernal)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('bernal')}>
                    <Image source={require('../../../ImagesExamples/BuenosAires/bernal.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'bernal' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/BuenosAires/bernal.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Berazategui </Text>
                    <Text style={{color:'#ffffff'}}>Calle 22</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.berazategui)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('berazategui')}>
                    <Image source={require('../../../ImagesExamples/BuenosAires/berazate.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'berazategui' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/BuenosAires/berazate.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text style={{color:'#ffffff'}}>Berazategui Oeste </Text>
                    <Text style={{color:'#ffffff'}}>Calle 102</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication} onPress={()=>OpenMap(BikeParksData.berazategui_oeste)}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxPhoto} onPress={()=>setShow('berazategui_oeste')}>
                    <Image source={require('../../../ImagesExamples/BuenosAires/berazaoeste.jpg')} style={styles.imgStyles}/>
                </TouchableOpacity>
                <Modal 
                animationType="none"
                visible={show === 'berazategui_oeste' ? true : false}
                onRequestClose={() => { setShow('') } }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxModalPhoto}>
                        <Image source={require('../../../ImagesExamples/BuenosAires/berazaoeste.jpg')} style={styles.imgStyles}/>
                        </View>
                    </View>
                </Modal>
            </View>
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