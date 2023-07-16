import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './chubutStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function ChubutParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('ChubutParks')}>
              <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/chubutTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
            Chubut
        </Text>
    </TouchableOpacity>
    )
}