import { Text,TouchableOpacity,View } from "react-native";
import styles from './corrientesStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function CorrientesParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('CorrientesParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
            Corrientes
        </Text>
    </TouchableOpacity>
    )
}