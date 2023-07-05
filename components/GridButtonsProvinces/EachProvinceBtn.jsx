import { View,Text,TouchableOpacity,ScrollView,StatusBar } from "react-native";
import styles from './gridStyles.js';
import SantaFeParks from "../ProvinceDatas/SantaFe/SantaFe.jsx";
import BuenosAiresParks from "../ProvinceDatas/BuenosAires/BuenosAires.jsx";
import CabaParks from "../ProvinceDatas/Caba/Caba.jsx";
import CatamarcaParks from "../ProvinceDatas/Catamarca/Catamarca.jsx";
import ChacoParks from "../ProvinceDatas/Chaco/Chaco.jsx";
import ChubutParks from "../ProvinceDatas/Chubut/Chubut.jsx";
import CordobaParks from "../ProvinceDatas/Cordoba/Cordoba.jsx";
import CorrientesParks from "../ProvinceDatas/Corrientes/Corrientes.jsx";
import EntreRiosParks from "../ProvinceDatas/EntreRios/EntreRios.jsx";
import FormosaParks from "../ProvinceDatas/Formosa/Formosa.jsx";
import JujuyParks from "../ProvinceDatas/Jujuy/Jujuy.jsx";
import LaPampaParks from "../ProvinceDatas/LaPampa/LaPampa.jsx";
import LaRiojaParks from "../ProvinceDatas/LaRioja/LaRioja.jsx";
import MendozaParks from "../ProvinceDatas/Mendoza/Mendoza.jsx";
import NeuquenaParks from "../ProvinceDatas/Neuquen/Neuquen.jsx";
import RioNegroParks from "../ProvinceDatas/RioNegro/RioNegro.jsx";
import SaltaParks from "../ProvinceDatas/Salta/Salta.jsx";
import SanJuanParks from "../ProvinceDatas/SanJuan/SanJuan.jsx";
import SanLuisParks from "../ProvinceDatas/SanLuis/SanLuis.jsx";
import SantaCruzParks from "../ProvinceDatas/SantaCruz/SantaCruz.jsx";
import SantiagoDelEsteroParks from "../ProvinceDatas/SantiagoDelEstero/SantiagoDelEstero.jsx";
import TierraDelFuegoParks from "../ProvinceDatas/TierraDelFuego/TierraDelFuego.jsx";
import TucumanParks from "../ProvinceDatas/Tucuman/Tucuman.jsx";
export default function AllProvincesBtns (){
    return(
      <View  style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E3E4D3"  />
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='never' contentContainerStyle={{alignItems:'center',paddingBottom:10}}>
   <View style={styles.boxProvinces}>
        <BuenosAiresParks/>
        <CabaParks/>
</View>
<View style={styles.boxProvinces}>
   <CatamarcaParks/>
   <ChacoParks />
</View>
<View style={styles.boxProvinces}>
    <ChubutParks/>
    <CordobaParks/>
</View>
<View style={styles.boxProvinces}>
   <CorrientesParks/>
   <EntreRiosParks/>
</View>
<View style={styles.boxProvinces}>
   <FormosaParks/>
   <JujuyParks/>
</View>
<View style={styles.boxProvinces}>
        <LaPampaParks/>
        <LaRiojaParks/>
</View>
<View style={styles.boxProvinces}>
    <MendozaParks/>
    <NeuquenaParks/>
</View>
<View style={styles.boxProvinces}>
    <RioNegroParks/>
    <SaltaParks/>
</View>
<View style={styles.boxProvinces}>
    <SanJuanParks/>
    <SanLuisParks/>
</View>
<View style={styles.boxProvinces}>
    <SantaCruzParks/>
    <SantaFeParks/>
</View>
<View style={styles.boxProvinces}>
    <SantiagoDelEsteroParks/>
    <TierraDelFuegoParks/>
</View>
<View style={styles.boxProvinces}>
    <TucumanParks/>
</View>
        </ScrollView>




        </View>
    )
}