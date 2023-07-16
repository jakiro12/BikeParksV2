import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './cabaStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function CabaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('CabaParks')}>
             <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/cabaTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           CABA
        </Text>
    </TouchableOpacity>
    )
}