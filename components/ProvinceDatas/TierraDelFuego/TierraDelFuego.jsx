import { Text,TouchableOpacity,View } from "react-native";
import styles from './tierradelfuegoStyles';
import { useNavigation } from "@react-navigation/native";
export default function TierraDelFuegoParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('TierraDelFuegoParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
           Tierra del Fuego
        </Text>
    </TouchableOpacity>
    )
}