import { AntDesign } from "@expo/vector-icons";
import * as React from "react";
import {View,Text,Image,TouchableOpacity} from "react-native";
import {ipserver} from "../config/settings";
import {styles} from '../css/styles';

export default function Carrinho(){
// vamos construir uma estrutura para carregar
// os dados sobre os produtos que virão do banco
// de dados. iremos criar um array(lista) com o 
// uso de uma constante chamada produto.
const[produto,setProduto] = React.useState([]);

// O comando React.Useeffect é executado uma vez
//ao abrir a tela home. Ele será responsavel
// por carregar os dados do servidor
React.useEffect(()=>{
    fetch(`${ipserver}carrinho/itens`)
    .then((response)=>response.json())
    .then((resultado)=>setProduto(resultado.rs))
    .catch((erro)=>console.error(`Erro ao tentar carregar os produtos ->${erro}`));
})





    return(
        <View style={styles.container}>
            

            <View style={styles.display}>

            {
                produto.map((item,ix)=>(
                  
                    <View key={item._id} style={styles.cxproduto}>
                        <Image source={{uri:`${item.foto}`}} style={styles.foto}/>

                        <Text style={styles.nomeproduto}>{item.nomeproduto}</Text>

                        <Text style={styles.preco}>{item.preco}</Text>
                    
                    
                    <TouchableOpacity onPress={()=>{
                        removerDoCarrinho(item._id);
                    }} style={styles.btncarrinho}>

                    <Text style={styles.txtcarrinho}>
                        remover <AntDesign name="delete" size={20} color="white"/>
                    </Text>

                    </TouchableOpacity>
                    </View>


                ))
            }
            </View>

        </View>
    )
}

function removerDoCarrinho(id){
    fetch(`${ipserver}carrinho/removeritem/${id}`,{
        method:"DELETE",
        headers:{
            accept:'application/json',
            'content-type':'application/json'
        }
    })
    .then(()=>alert("item removido"))
    .catch((error)=>alert(`Erro ao tentar tremover o item${error}`));
}