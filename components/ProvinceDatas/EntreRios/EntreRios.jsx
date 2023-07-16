import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './entreriosStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function EntreRiosParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('EntreRiosParks')}>
          <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/entreriosTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
            Entre rios
        </Text>
    </TouchableOpacity>
    )
}