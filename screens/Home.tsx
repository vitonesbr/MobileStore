import * as React from "react";
import {View,Text} from "react-native";
import {ipserver} from "../config/settings"

export default function Home(){

// vamos construir uma estrutura para carregar
// os dados sobre os produtos que virão do banco
// de dados. iremos criar um array(lista) com o 
// uso de uma constante chamada produto.
const[produto,setProduto] = React.useState([]);

// O comando React.Useeffect é executado uma vez
//ao abrir a tela home. Ele será responsavel
// por carregar os dados do servidor
React.useEffect(()=>{
    fetch(`${ipserver}produto/listar`)
    .then((response)=>response.json())
    .then((resultado)=>setProduto(resultado.rs))
    .catch((erro)=>console.error(`Erro ao tentar carregar os produtos ->${erro}`));
},[])





    return(
        <View>
            <Text> Tela Home </Text>
        </View>
    )
}