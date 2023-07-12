import { View,Text,TouchableOpacity } from "react-native";
import styles from './santafeStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function SantaFeParks(){
    const navigation=useNavigation()
    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('SantaFeParks')}>
        <View>
            <Text>Imagen</Text>
        </View>
    <Text>
       Santa Fe
    </Text>
</TouchableOpacity>
    )
}