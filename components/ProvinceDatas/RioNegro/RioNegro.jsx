import { Text,TouchableOpacity,View } from "react-native";
import styles from './rionegroStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function RioNegroParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('RioNegroParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
           Rio Negro
        </Text>
    </TouchableOpacity>
    )
}