import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './lapampaStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function LaPampaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('LaPampaParks')}>
              <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/lapampaTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           La Pampa
        </Text>
    </TouchableOpacity>
    )
}