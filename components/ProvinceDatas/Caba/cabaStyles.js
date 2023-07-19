import { StyleSheet } from "react-native";

export default provinceStyles=StyleSheet.create({
    boxProvince:{
        width:'45%',
        height:'100%',
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        overflow:'hidden',
        backgroundColor:'#0a7eaa'
    },
    imgContainer:{
        height:'80%',
        width:'100%',
    },
    imgLogoSize:{
        width:'100%',
      height:'100%',
      resizeMode:'stretch',
      tintColor:'#ffffff'
    },
    provinceName:{
        fontSize:20
    }
})