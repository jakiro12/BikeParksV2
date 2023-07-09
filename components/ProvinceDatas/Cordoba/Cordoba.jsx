import { Text,TouchableOpacity,View } from "react-native";
import styles from './cordobaStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function CordobaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('CordobaParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
           Cordoba
        </Text>
    </TouchableOpacity>
    )
}