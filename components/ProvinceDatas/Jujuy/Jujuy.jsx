import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './jujuyStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function JujuyParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('JujuyParks')}>
             <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/jujuyTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
          Jujuy
        </Text>
    </TouchableOpacity>
    )
}