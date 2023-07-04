import { Text,TouchableOpacity,View } from "react-native";
import styles from './chubutStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function ChubutParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('BuenosAiresParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
            chubut parques
        </Text>
    </TouchableOpacity>
    )
}