import { Text,TouchableOpacity,View,Image } from "react-native";
import styles from './santiagodelesteroStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function SantiagoDelEsteroParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('SantiagoDelEsteroParks')}>
           <View style={styles.imgContainer}>
            <Image source={require('../../ImagesExamples/LogosProvincias/santiagodelesteroTint.png')} style={styles.imgLogoSize} />
            </View>
        <Text style={styles.provinceName}>
           S. del Estero 
        </Text>
    </TouchableOpacity>
    )
}