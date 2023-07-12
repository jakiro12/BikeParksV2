import { Text,TouchableOpacity,View } from "react-native";
import styles from './saltaStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function SaltaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('SaltaParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
           Salta
        </Text>
    </TouchableOpacity>
    )
}