import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './chacoStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function ChacoParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('ChacoParks')}>
             <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/chacoTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
            Chaco
        </Text>
    </TouchableOpacity>
    )
}