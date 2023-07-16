import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './neuquenStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function NeuquenaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('NeuquenParks')}>
           <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/neuquenTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           Nuequen
        </Text>
    </TouchableOpacity>
    )
}