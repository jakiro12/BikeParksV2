import { Text,TouchableOpacity,View } from "react-native";
import styles from './sanluisStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function SanLuisParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('SanLuisParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
           San Luis
        </Text>
    </TouchableOpacity>
    )
}