import { View,Text,ScrollView,TouchableOpacity } from "react-native";
import styles from './styleList.js';
export default function SeeAllParksInBuenosAires (){
    return(
        <View style={styles.contianerList}>
          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='never' contentContainerStyle={{alignItems:'center',paddingBottom:10}}>
            <View style={styles.parkBox}>
                <View style={styles.boxInfo}>
                    <Text>San Nicolas de los Arroyos </Text>
                    <Text> Av Juan Domingo Peron</Text>
                    <TouchableOpacity style={styles.btnUbication}>
                        <Text style={styles.textUbication}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxPhoto}></View>

            </View>
          </ScrollView>
            </View>
    )
}