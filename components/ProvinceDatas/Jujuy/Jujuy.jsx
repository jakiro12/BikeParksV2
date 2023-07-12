import { Text,TouchableOpacity,View } from "react-native";
import styles from './jujuyStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function JujuyParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('JujuyParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
          Jujuy
        </Text>
    </TouchableOpacity>
    )
}