import { Text,TouchableOpacity,View } from "react-native";
import styles from './formosaStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function FormosaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('FormosaParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
            formosa 
        </Text>
    </TouchableOpacity>
    )
}