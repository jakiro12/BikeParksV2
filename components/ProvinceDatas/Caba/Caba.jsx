import { Text,TouchableOpacity,View } from "react-native";
import styles from './cabaStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function CabaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('Caba')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
           CABA
        </Text>
    </TouchableOpacity>
    )
}