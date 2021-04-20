/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import Home from '../screens/Home';
import Cadastro from '../screens/Cadastro';
import Perfil from '../screens/Perfil';
import Carrinho from '../screens/Carrinho';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, HomeParamList, CadastroParamList, CarrinhoParamList, PerfilParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Carrinho"
        component={CarrinhoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="shoppingcart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Perfil"
        component={PerfilNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Cadastro"
        component={CadastroNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="adduser" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof AntDesign>['name']; color: string }) {
  return <AntDesign size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: 'Tela Home' }}
      />
    </HomeStack.Navigator>
  );
}

const CarrinhoStack = createStackNavigator<CarrinhoParamList>();

function CarrinhoNavigator() {
  return (
    <CarrinhoStack.Navigator>
      <CarrinhoStack.Screen
        name="Carrinho"
        component={Carrinho}
        options={{ headerTitle: 'Tela Carrinho' }}
      />
    </CarrinhoStack.Navigator>
  );
}

const PerfilStack = createStackNavigator<PerfilParamList>();

function PerfilNavigator() {
  return (
    <PerfilStack.Navigator>
      <PerfilStack.Screen
        name="Perfil"
        component={Perfil}
        options={{ headerTitle: 'Tela Perfil' }}
      />
    </PerfilStack.Navigator>
  );
}

const CadastroStack = createStackNavigator<CadastroParamList>();

function CadastroNavigator() {
  return (
    <CadastroStack.Navigator>
      <CadastroStack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerTitle: 'Tela Cadastro' }}
      />
    </CadastroStack.Navigator>
  );
}