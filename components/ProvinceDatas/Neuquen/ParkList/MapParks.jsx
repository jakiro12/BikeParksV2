import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    neuquen_1:'https://maps.app.goo.gl/M2e3HqFEaxqtaFXD8',
    neuquen_2:'https://goo.gl/maps/NEGYi9xtYspmh7jt9',
    san_patricio_del_chañar:'https://maps.app.goo.gl/nPWhbpJH8XSAf6rX9',
    zapala:'https://maps.app.goo.gl/C3ZctvP4hEgfghXr7',
}
module.exports={
    OpenMap,
    BikeParksData,
}