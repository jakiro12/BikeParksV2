import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    funes:'https://maps.app.goo.gl/4o8Usahex75xCieJ8',
    galvez:'https://maps.app.goo.gl/yriSKFgyS8oFWSit9',
    rafaela:'https://maps.app.goo.gl/spA7N5cMjfp1zvPQ9',
    reco_park:'https://maps.app.goo.gl/4qbC9EYDUK8U2P3s9',
    rosario_ciudad:'https://maps.app.goo.gl/z4y5SrMFgz3cj3yX8',
    rosario_helltrack:'https://maps.app.goo.gl/gkm72ALuGyHRLFt96',
    roldan:'https://maps.app.goo.gl/oyNmpiqhcw26Tej98',
    rufino:'https://maps.app.goo.gl/9H8DQskNXFD3bsMP7',
    san_lorenzo:'https://maps.app.goo.gl/ZHhbEkiAhA2vMCRw7',
    santa_fe_capital:'https://maps.app.goo.gl/TjWi1z3ppfkzgLD2A',
    santo_tome:'https://maps.app.goo.gl/eqkwDRqjnjiMVm6P6',
    venado_tuerto:'https://maps.app.goo.gl/yzAbK6gGgTW8uGYCA',
}
module.exports={
    OpenMap,
    BikeParksData,
}