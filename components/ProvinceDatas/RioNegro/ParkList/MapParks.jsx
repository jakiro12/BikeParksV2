import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    bariloche:'https://maps.app.goo.gl/NxWPr1BGuHVaUNbdA',
    general_roca:'https://maps.app.goo.gl/Y51FqzJYFMQAEnjPA',
    las_grutas:'https://maps.app.goo.gl/BHzWjHo265JAZbum7',
    villa_regina:'https://maps.app.goo.gl/h2rvHxhsQgnwWw4o8',
}
module.exports={
    OpenMap,
    BikeParksData,
}