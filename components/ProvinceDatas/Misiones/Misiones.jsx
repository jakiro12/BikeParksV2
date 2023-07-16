import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './misionesStyles';
import { useNavigation } from "@react-navigation/native";
export default function MisionesParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('MisionesParks')}>
            <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/misionesTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           Misiones
        </Text>
    </TouchableOpacity>
    )
}