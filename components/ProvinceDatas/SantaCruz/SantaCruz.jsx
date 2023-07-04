import { Text,TouchableOpacity,View } from "react-native";
import styles from './santacruzStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function SantaCruzParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('BuenosAiresParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
           Santa cruz parques
        </Text>
    </TouchableOpacity>
    )
}