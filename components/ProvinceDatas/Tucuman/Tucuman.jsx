import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './tucumanStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function TucumanParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('TucumanParks')}>
           <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/tucumanTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           Tucuman
        </Text>
    </TouchableOpacity>
    )
}