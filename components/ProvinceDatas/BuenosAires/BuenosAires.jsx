import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './buenosairesStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function BuenosAiresParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('BuenosAiresParks')}>
           <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/buenosAiresTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
            Buenos Aires 
        </Text>
    </TouchableOpacity>
    )
}