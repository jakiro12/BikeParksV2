import { Text,TouchableOpacity,View } from "react-native";
import styles from './mendozaStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function MendozaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('MendozaParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
           Mendoza 
        </Text>
    </TouchableOpacity>
    )
}