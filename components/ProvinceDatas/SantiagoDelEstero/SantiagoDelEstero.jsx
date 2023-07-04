import { Text,TouchableOpacity,View } from "react-native";
import styles from './santiagodelesteroStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function SantiagoDelEsteroParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('BuenosAiresParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
           Santiago del estero parques
        </Text>
    </TouchableOpacity>
    )
}