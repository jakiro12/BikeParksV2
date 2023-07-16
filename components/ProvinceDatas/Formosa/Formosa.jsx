import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './formosaStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function FormosaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('FormosaParks')}>
            <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/formosaTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
            formosa 
        </Text>
    </TouchableOpacity>
    )
}