import { Text,TouchableOpacity,View } from "react-native";
import styles from './lapampaStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function LaPampaParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('LaPampaParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
           La Pampa
        </Text>
    </TouchableOpacity>
    )
}