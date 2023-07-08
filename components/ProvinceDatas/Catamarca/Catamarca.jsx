import { Text,TouchableOpacity,View } from "react-native";
import styles from './catamarcaStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function CatamarcaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('CatamarcaParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
           Catamarca
        </Text>
    </TouchableOpacity>
    )
}