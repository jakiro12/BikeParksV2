import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './catamarcaStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function CatamarcaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('CatamarcaParks')}>
            <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/catamarcaTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           Catamarca
        </Text>
    </TouchableOpacity>
    )
}