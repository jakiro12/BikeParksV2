import { Text,TouchableOpacity,View } from "react-native";
import styles from './entreriosStyles.js';
import { useNavigation } from "@react-navigation/native";
export default function EntreRiosParks(){
    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.boxProvince} activeOpacity={1} onPress={()=> navigation.navigate('EntreRiosParks')}>
            <View>
                <Text>Imagen</Text>
            </View>
        <Text>
            Entre rios
        </Text>
    </TouchableOpacity>
    )
}