import FecharCaixaScreen from '../telas/FecharCaixaScreen';
import TrocarTurnoScreen from '../telas/TrocarTurnoScreen';
import BaterPontoScreen from '../telas/BaterPontoScreen';
import VisualizarTarefasScreen from '../telas/VisualizarTarefasScreen';

// Container de navegação (toda forma de navegação "link" , "abas" , "menus")
import {NavigationContainer} from '@react-navigation/native';

// Menu de navegação lateral
import {createDrawerNavigator} from '@react-navigation/drawer';

import {ScrollView, Text, StyleSheet} from 'react-native';

export default function MenuLateral() {
  // Inicializando o Drawer
  const Drawer = createDrawerNavigator();
  return(
      <NavigationContainer >
        <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#447c5b' }, // cor do cabeçalho
          headerTintColor: '#fff', // cor do texto no cabeçalho
          drawerStyle: {
            backgroundColor: '#c1e1c1', // cor do fundo do menu lateral
            width: 240,
          },
          drawerActiveTintColor: '#447c5b', // cor do texto do item ativo
          drawerInactiveTintColor: '#333', // cor do texto dos itens inativos
          drawerActiveBackgroundColor: '#a8d5ba', // fundo do item ativo
        }}
      >
          <Drawer.Screen name = 'Home' component = {HomeScreen}/>
          <Drawer.Screen name = 'BaterPonto' component = {BaterPontoScreen}/>
          <Drawer.Screen name = 'FecharCaixa' component = {FecharCaixaScreen}/>
          <Drawer.Screen name = 'TrocarTurno' component = {TrocarTurnoScreen}/>
          <Drawer.Screen name = 'VisualizarTarefas' component = {VisualizarTarefasScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>

  )
}



// NAO APAGUEI PARA TENTAR REAPROVEITAR 