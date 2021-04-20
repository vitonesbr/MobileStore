import * as React from "react";
import {View,Text,Image} from "react-native";
import {ipserver} from "../config/settings";
import {styles} from '../css/styles';


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
                        <Image source={{uri:`${produto.foto}`}} style={styles.foto}/>

                        <Text style={styles.nomeproduto}>{produto.nomeproduto}</Text>

                        <Text style={styles.preco}>{produto.preco}</Text>
                    </View>
            
            </View>

        </View>
    )
}

