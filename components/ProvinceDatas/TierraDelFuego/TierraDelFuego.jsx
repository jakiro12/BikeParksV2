import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './tierradelfuegoStyles';
import { useNavigation } from "@react-navigation/native";
export default function TierraDelFuegoParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('TierraDelFuegoParks')}>
           <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/tierradelfuegoTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           Tierra del Fuego
        </Text>
    </TouchableOpacity>
    )
}