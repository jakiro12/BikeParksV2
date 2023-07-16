import { StyleSheet } from "react-native";

export default provinceStyles=StyleSheet.create({
    boxProvince:{
        width:'45%',
        height:'100%',
        borderColor:'#000000',
        borderWidth:2,
        borderRadius:10,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        overflow:'hidden'
    },
    imgContainer:{
        height:'80%',
        width:'100%',
    },
    imgLogoSize:{
        width:'100%',
      height:'100%',
      resizeMode:'stretch',
    },
    provinceName:{
        fontSize:20
    }
    
})