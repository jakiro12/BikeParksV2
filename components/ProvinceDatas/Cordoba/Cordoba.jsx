import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './cordobaStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function CordobaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('CordobaParks')}>
            <View style={styles.imgContainer}>
                <Image source={require('../../ImagesExamples/LogosProvincias/pCordoba.jpg')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           Cordoba
        </Text>
    </TouchableOpacity>
    )
}