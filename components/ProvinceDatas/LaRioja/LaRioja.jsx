import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './lariojaStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function LaRiojaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('LaRiojaParks')}>
            <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/lariojaTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           La Rioja
        </Text>
    </TouchableOpacity>
    )
}