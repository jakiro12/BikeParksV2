import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    alem:'https://maps.app.goo.gl/7aKSco3QSGz9cAee7',
    apostoles:'https://maps.app.goo.gl/ABmVnvyk169N9K9b9',
    el_brete:'https://maps.app.goo.gl/VakS3YXtgKJY3hR47',
    obera:'https://maps.app.goo.gl/m5sahrLFeQ5SRpJYA',
    puerto_rico:'https://maps.app.goo.gl/8Pmyr7sigdSckV4n9',
    villa_cabello:'https://maps.app.goo.gl/Juu4LEAjgABs3J36A',
}
module.exports={
    OpenMap,
    BikeParksData,
}