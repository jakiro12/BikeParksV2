import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './saltaStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function SaltaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('SaltaParks')}>
              <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/saltaTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           Salta
        </Text>
    </TouchableOpacity>
    )
}