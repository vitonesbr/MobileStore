import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    
    },

    foto:{
        width:"100%",
        height:250,
        resizeMode:'contain'
    },

    nomeproduto:{
        fontSize: 15,
        fontWeight:'bold'
    },

    preco:{
        fontSize:18,
        color:'#070'
    },

    cxproduto:{
        
        shadowColor:'#000',
        shadowOpacity:0.8,
        shadowRadius:2,
        shadowOffset:{width:10, height:10},
        elevation:2,
        padding:7
    },

    display:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    acesso:{
        width:200,
    },
    fotodetalhe:{
        width:400,
        height:300
    },
    btncarrinho:{
        backgroundColor:'black',
        width:200,
        marginLeft:110,
        marginRight:'auto',
        padding:10,
        marginTop:100
    },
    txtcarrinho:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center'
    }




})                                                                 