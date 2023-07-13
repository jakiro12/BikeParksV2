import { Text,TouchableOpacity,View } from "react-native";
import styles from './tucumanStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function TucumanParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('TucumanParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
           Tucuman
        </Text>
    </TouchableOpacity>
    )
}