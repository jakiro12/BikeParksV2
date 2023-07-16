import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './sanjuanStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function SanJuanParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('SanJuanParks')}>
             <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/sanjuanTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           San juan
        </Text>
    </TouchableOpacity>
    )
}