import { Text,TouchableOpacity,View } from "react-native";
import styles from './misionesStyles';
import { useNavigation } from "@react-navigation/native";
export default function MisionesParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('MisionesParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
           Misiones
        </Text>
    </TouchableOpacity>
    )
}