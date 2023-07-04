import { Text,TouchableOpacity,View } from "react-native";
import styles from './chacoStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function ChacoParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('BuenosAiresParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
            chaco parques
        </Text>
    </TouchableOpacity>
    )
}