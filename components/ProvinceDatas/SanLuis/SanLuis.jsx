import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './sanluisStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function SanLuisParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('SanLuisParks')}>
             <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/sanluisTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           San Luis
        </Text>
    </TouchableOpacity>
    )
}