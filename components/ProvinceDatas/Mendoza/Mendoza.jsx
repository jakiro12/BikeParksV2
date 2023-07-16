import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './mendozaStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function MendozaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('MendozaParks')}>
           <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/mendozaTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           Mendoza 
        </Text>
    </TouchableOpacity>
    )
}