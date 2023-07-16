import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './santacruzStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function SantaCruzParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('SantaCruzParks')}>
             <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/santacruzTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           Santa cruz
        </Text>
    </TouchableOpacity>
    )
}