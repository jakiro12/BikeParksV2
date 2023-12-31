import { StyleSheet } from "react-native";

export default stylesLogin = StyleSheet.create({
    contianer:{
        backgroundColor:'#523001',
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },
    textBtn:{
        color:'#ffffff',
        fontSize:18,
    },
    btnSGetIn:{
        width:100,
        height:40,
        borderColor:'#ffffff',
        borderWidth:2,
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#03c04a',
    },
    infoContainer:{
        width:'90%',
        height:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    btnContainer:{
        width:'90%',
        height:'30%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    textDescribe:{
        fontSize:24,
        textAlign:'center',
        color:'#ffffff',
        fontWeight:'bold'
    },
    bckImage:{
     display:'flex',
     justifyContent:'center',
     width:'100%',
     height:'100%',
     alignItems:'center'
    }
})