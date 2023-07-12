import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    caucete:'https://maps.app.goo.gl/RRiqb5HQK8ym2ZoK9',
    san_juan:'https://maps.app.goo.gl/xzxVvvj3VvKoneEt8',
}
module.exports={
    OpenMap,
    BikeParksData,
}