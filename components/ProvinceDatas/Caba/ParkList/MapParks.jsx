import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    almagro:'https://maps.app.goo.gl/4ET2j2cEKPkZuFWS7',    
    barrio_norte:'https://maps.app.goo.gl/CJQahdA5C4y5frgf9',
    barracas:'https://maps.app.goo.gl/hw2jzsdx2tYwXaTJA',
    barrio_general_savio:'https://maps.app.goo.gl/YAggQSdPLND8G4hF9',
    nueva_pompeya:'https://maps.app.goo.gl/ETMeXPBNK6NxDAAx9',
    nuñez:'https://maps.app.goo.gl/M7trNa3jziL9vTBUA',
    mataderos:'https://maps.app.goo.gl/APV8QAqPuevAchzw9',
    palermo_1:'https://maps.app.goo.gl/SUi6sjVyYQsPfBRQ9',
    palermo_2:'https://maps.app.goo.gl/urGs8Z9iaefvpAjF6',
    palermo_3:'https://maps.app.goo.gl/5Cr4zfb6eLSBXHYC6',
    palermo_4:'https://maps.app.goo.gl/qvpguYQB5fhKa2Du6',
    parque_patricios:'https://maps.app.goo.gl/T84eRHgiTCykjnAz7',
    villa_del_parque:'https://maps.app.goo.gl/2YqnrwzmfcegGDKw9',
    villa_real:'https://maps.app.goo.gl/AmSfSSHjzMDuFATw8',
}
module.exports={
    OpenMap,
    BikeParksData,
}