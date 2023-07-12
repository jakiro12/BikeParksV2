import { View,Text,StatusBar,TouchableOpacity } from "react-native";
import styles from './landingStyles.js';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllProvincesBtns from "./GridButtonsProvinces/EachProvinceBtn.jsx";
import SeeAllParksInBuenosAires from "./ProvinceDatas/BuenosAires/ParksList/ListOfParkAviables.jsx";
import SeeAllParksInCaba from "./ProvinceDatas/Caba/ParkList/ListOfParksAviables.jsx";
import SeeAllParksInCatamarca from "./ProvinceDatas/Catamarca/ParkList/ListOfParksAviables.jsx";
import SeeAllParksInChaco from "./ProvinceDatas/Chaco/ParkList/ListOfParksAviables.jsx";
import SeeAllParksInChubut from "./ProvinceDatas/Chubut/ParkList/ListOfParksAviables.jsx";
import SeeAllParksInCordoba from "./ProvinceDatas/Cordoba/ParkList/ListOfParksAviables.jsx";
import SeeAllParksInCorrientes from "./ProvinceDatas/Corrientes/ParkList/ListOfParksAviables.jsx";
import SeeAllParksInEntreRios from "./ProvinceDatas/EntreRios/ParkList/ListOfParksAviables.jsx";
import SeeAllParksInFormosa from "./ProvinceDatas/Formosa/ParkList/ListOfParksAviables.jsx";
import SeeAllParksInJujuy from "./ProvinceDatas/Jujuy/ParkList/ListOfParksAviables.jsx";
import SeeAllParksInLaPampa from "./ProvinceDatas/LaPampa/ParkList/ListOfParksAviables.jsx";
import SeeAllParksInLaRioja from "./ProvinceDatas/LaRioja/ParkList/ListOfParksAviables.jsx";
import SeeAllParksInMendoza from "./ProvinceDatas/Mendoza/ParkList/ListOfParksAviables.jsx";
import SeeAllParksInMisiones from "./ProvinceDatas/Misiones/ParkList/ListOfParksAviables.jsx";
import SeeAllParksInNeuquen from "./ProvinceDatas/Neuquen/ParkList/ListOfParksAviables.jsx";
import SeeAllParksInRioNegro from "./ProvinceDatas/RioNegro/ParkList/ListOfParksAviables.jsx";
import SeeAllParksInSalta from "./ProvinceDatas/Salta/ParkList/ListOfParksAviables.jsx";
function LandingPageInformation ({navigation}){
    return(
        <View style={styles.contianer}>
        <StatusBar barStyle="dark-content" backgroundColor="#E3E4D3"  />
        <View style={styles.infoContainer}>
            <Text>
                En esta aplicacion podras encontrar todos los skatepark y bikepark del pais 
                para ir a conocerlos, recuerda usar casco!!!
            </Text>
        </View>
        <View style={styles.btnContainer}>
        <TouchableOpacity activeOpacity={1} style={styles.btnSGetIn} onPress={()=>{navigation.navigate('AllProvinces')}}>
       <Text style={styles.textBtn}>Open!</Text>
        </TouchableOpacity>
        </View>
     </View>
    )
}

const Stack = createNativeStackNavigator();


export default function NavigationPagesAndSheet (){
    return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="InfoApp" component={LandingPageInformation} />
            <Stack.Screen name="AllProvinces"  component={AllProvincesBtns}/>
            <Stack.Screen name="BuenosAiresParks" component={SeeAllParksInBuenosAires} />
            <Stack.Screen name="CabaParks" component={SeeAllParksInCaba}/>
            <Stack.Screen name="CatamarcaParks" component={SeeAllParksInCatamarca}/>
            <Stack.Screen name="ChacoParks" component={SeeAllParksInChaco}/>
            <Stack.Screen name="ChubutParks" component={SeeAllParksInChubut}/>
            <Stack.Screen name="CordobaParks" component={SeeAllParksInCordoba}/>
            <Stack.Screen name="CorrientesParks" component={SeeAllParksInCorrientes}/>
            <Stack.Screen name="EntreRiosParks" component={SeeAllParksInEntreRios}/>
            <Stack.Screen name="FormosaParks" component={SeeAllParksInFormosa}/>
            <Stack.Screen name="JujuyParks" component={SeeAllParksInJujuy}/>
            <Stack.Screen name="LaPampaParks" component={SeeAllParksInLaPampa}/>
            <Stack.Screen name="LaRiojaParks" component={SeeAllParksInLaRioja}/>
            <Stack.Screen name="MendozaParks" component={SeeAllParksInMendoza}/>
            <Stack.Screen name="MisionesParks" component={SeeAllParksInMisiones}/>
            <Stack.Screen name="NeuquenParks" component={SeeAllParksInNeuquen}/>
            <Stack.Screen name="RioNegroParks" component={SeeAllParksInRioNegro}/>
            <Stack.Screen name="SaltaParks" component={SeeAllParksInSalta}/>


            
            </Stack.Navigator>
            </NavigationContainer>
    )
}