import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './rionegroStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function RioNegroParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('RioNegroParks')}>
            <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/rionegroTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           Rio Negro
        </Text>
    </TouchableOpacity>
    )
}