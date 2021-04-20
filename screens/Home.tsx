import * as React from "react";
import {View,Text,Image} from "react-native";
import {ipserver} from "../config/settings";
import {styles} from '../css/styles';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { TouchableOpacity } from "react-native-gesture-handler";
import Navigation from "../navigation";
import Detalhes from "./Detalhes";


const Stack = createStackNavigator();
export default function Home(){
    return(
        <NavigationContainer independent={true}>
        <Stack.Navigator>
            <Stack.Screen name="listarProduto" component={listarProduto}/>
            <Stack.Screen name="Detalhes" component={Detalhes}/>
        </Stack.Navigator>
    </NavigationContainer>
)


}

function listarProduto({navigation}){



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
        <View style={styles.container}>
            <Text> Tela Home </Text>

            <View style={styles.display}>

            {
                produto.map((item,ix)=>(
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("Detalhes",{idproduto:`${item._id}`})
                    }}>
                    <View key={item._id} style={styles.cxproduto}>
                        <Image source={{uri:`${item.foto}`}} style={styles.foto}/>

                        <Text style={styles.nomeproduto}>{item.nomeproduto}</Text>

                        <Text style={styles.preco}>{item.preco}</Text>
                    </View>
                    </TouchableOpacity>
                ))
            }
            </View>

        </View>
    )
}

