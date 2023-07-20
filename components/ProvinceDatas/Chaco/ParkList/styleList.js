import { StyleSheet } from "react-native";

export default listParks=StyleSheet.create({
    contianerList:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#03c04a',
        alignItems:'center'
     },
     scrollContainer:{
        width:'90%',
        height:'90%'
     },
     parkBox:{
        width:'95%',
        height:150,
        borderWidth:2,
        borderColor:'#000000',
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#00000070'
     },
     boxInfo:{
        width:'48%',
        height:'80%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
     },
     boxPhoto:{
        width:'45%',
        height:'95%',
     },
     btnUbication:{
        width:'60%',
        height:25,
        backgroundColor:'#03c04a',
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
     },
     textUbication:{
        color:'#ffffff'
     },
     imgStyles:{
      width:'100%',
      height:'100%',
      resizeMode:'stretch',
     },
     modalContainer:{
      width:'100%',
      height:'100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#03c04a',

     },
     boxModalPhoto:{
      width:'90%',
      height:'50%',
     },
     bckImage:{
      display:'flex',
      justifyContent:'center',
      width:'100%',
      height:'100%',
      alignItems:'center'
     }
})