import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    parque_bicentenario:'https://maps.app.goo.gl/a15HEVWsLZ9JRL2dA',    
    salta_capital:'https://maps.app.goo.gl/cSiHHr1bSPhsocMK9',
}
module.exports={
    OpenMap,
    BikeParksData,
}