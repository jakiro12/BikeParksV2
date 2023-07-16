import { View,Text,TouchableOpacity,Image } from "react-native";
import styles from './santafeStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function SantaFeParks(){
    const navigation=useNavigation()
    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('SantaFeParks')}>
        <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/santafeTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
       Santa Fe
    </Text>
</TouchableOpacity>
    )
}