import * as React from "react";
import {View,Text,Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {ipserver} from "../config/settings";
import {styles} from '../css/styles';
import {AntDesign} from '@expo/vector-icons';

export default function Detalhes({route}){

const {idproduto} = route.params;

// vamos construir uma estrutura para carregar
// os dados sobre os produtos que virão do banco
// de dados. iremos criar um array(lista) com o 
// uso de uma constante chamada produto.
const[produto,setProduto] = React.useState([]);

// O comando React.Useeffect é executado uma vez
//ao abrir a tela home. Ele será responsavel
// por carregar os dados do servidor
React.useEffect(()=>{
    fetch(`${ipserver}produto/codproduto/${idproduto}`)
    .then((response)=>response.json())
    .then((resultado)=>setProduto(resultado.rs))
    .catch((erro)=>console.error(`Erro ao tentar carregar os produtos ->${erro}`));
},[])





    return(
        <View style={styles.container}>
            

            <View style={styles.display}>

                    <View style={styles.cxproduto}>
                        <Image source={{uri:`${produto.foto}`}} style={styles.fotodetalhe}/>

                        <Text style={styles.nomeproduto}>{produto.nomeproduto}</Text>

                        <Text style={styles.nomeproduto}>{produto.descricao}</Text>

                        <Text style={styles.preco}>{produto.preco}</Text>

                        <Text style={styles.preco}> Código do produto:{produto._id}</Text>
                    </View>

                    <TouchableOpacity onPress={()=>{
                        adicionarCarrinho(produto);
                    }} style={styles.btncarrinho}>
                        <Text style={styles.txtcarrinho}>
                            Adicionar ao carrinho
                            <AntDesign name='shoppingcart' size={20} color='#fff'/>    
                            
                        </Text>
                    </TouchableOpacity>
            
            </View>

        </View>
    )
}

function adicionarCarrinho(dados){
    fetch(`${ipserver}carrinho/adicionar`,{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            idproduto:dados._id,
            nomeproduto:dados.nomeproduto,
            preco:dados.preco,
            foto:dados.foto
        })
    })
    .then((Response)=>Response.json())
    .then((resultado)=>alert(resultado.rs))
.catch((error)=>alert(`Não foi possivel adicionar -> ${error}`))

}