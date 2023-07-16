import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './corrientesStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function CorrientesParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('CorrientesParks')}>
             <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/corrientesTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
            Corrientes
        </Text>
    </TouchableOpacity>
    )
}