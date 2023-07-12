import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    palpala:'https://maps.app.goo.gl/ZrHbkHaQ32Af42258', 
    san_salvador_de_jujuy:'https://maps.app.goo.gl/orhyFrpAz63ph6S5A',
}
module.exports={
    OpenMap,
    BikeParksData,
}