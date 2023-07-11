import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    concepcion_del_uruguay:'https://maps.app.goo.gl/bZYNGXgnZAmFaLRE6',
    concordia:'https://maps.app.goo.gl/oTwR8ZNkpxTqah9o8',
    diamante:'https://maps.app.goo.gl/yi9YGaLwisKVYxEn8',
    gualeguay:'https://maps.app.goo.gl/hxtTvnvATXuexazu9',
    gualeguaychu:'https://maps.app.goo.gl/k9TcmR4CYuqXr87v9',
    libertador_san_martin:'https://maps.app.goo.gl/DAhwejKCUWMfjqyMA',
    parana:'https://maps.app.goo.gl/EEbY4fASqFSwqPKQ8',
    segui:'https://maps.app.goo.gl/f1tmxEqEMDdkcawo8',
    villaguay:'https://maps.app.goo.gl/xf74G1T7fZVdg79y9',
}
module.exports={
    OpenMap,
    BikeParksData,
}