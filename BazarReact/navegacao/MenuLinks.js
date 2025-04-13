import BaterPontoScreen from '../telas/BaterPontoScreen';
import FecharCaixaScreen from '../telas/FecharCaixaScreen';
import TrocaTurnosScreen from '../telas/TrocarTurnoScreen';
import VisualizarTarefasScreen from '../telas/VisualizarTarefasScreen';

// Container de navegação (toda forma de navegação "link" , "abas" , "menus")
import {NavigationContainer} from '@react-navigation/native';

// Menu de navegação lateral
import {createStackNavigator} from '@react-navigation/stack';

import {Text, ScrollView, StyleSheet, Image, TouchableOpacity, View, Dimensions} from 'react-native';

// Importando os estilos globai que serão usadas em todas ou quase todas as janelas
import { EstilosGlobais } from '../styles/StylesGlobais';

// Pegando as dimensçoes da janela e aderindo a variavel width
const { width } = Dimensions.get('window');

function TelaInicial({navigation}){
  return (
    <ScrollView style={EstilosGlobais.container}>
      <Image style={EstilosGlobais.img} source={require('../imagens/bazar.png')} />

      <Text style={styles.text}> Rafael - Catumbi </Text>

      {/* Botao de Bater Ponto com Imagem */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Bater Ponto')}>
        <View style={styles.btnContent}>
          <Image
            source={require('../imagens/baterponto.png')}
            style={styles.btnIcon}
          />
          <Text style={styles.btnTexto}>Bater Ponto</Text>
        </View>
      </TouchableOpacity>

      {/* Botao de Fechar Caixa com Imagem */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Fechar Caixa')}>
        <View style={styles.btnContent}>
          <Image
            source={require('../imagens/fecharcaixa.png')}
            style={styles.btnIcon}
          />
          <Text style={styles.btnTexto}>Fechar Caixa</Text>
        </View>
      </TouchableOpacity>

      {/* Botao de Trocar Turno com Imagem */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Trocar Turno')}>
        <View style={styles.btnContent}>
          <Image
            source={require('../imagens/trocarturno.png')}
            style={styles.btnIcon}
          />
          <Text style={styles.btnTexto}>Troca de Turnos</Text>
        </View>
      </TouchableOpacity>

      {/* Botao de Visualizar Tarefas com Imagem */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Visualizar Tarefas')}>
        <View style={styles.btnContent}>
          <Image
            source={require('../imagens/tarefas.png')}
            style={styles.btnIcon}
          />
          <Text style={styles.btnTexto}>Visualizar Tarefas</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Dando aos botões a capacidade de Menu
export default function MenuLinks(){
  const Stack = createStackNavigator();
return(
    <NavigationContainer>
    <Stack.Navigator
    // Deixando o fundo do titulo com a mesma cor da janela
      screenOptions={{
        headerStyle: {
          backgroundColor: '#447c5b', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
        fontWeight: 'bold', 
        },
      }}
    >
      <Stack.Screen name="Menu Principal" component={TelaInicial} />
      <Stack.Screen name="Bater Ponto" component={BaterPontoScreen} />
      <Stack.Screen name="Fechar Caixa" component={FecharCaixaScreen} />
      <Stack.Screen name="Trocar Turno" component={TrocaTurnosScreen} />
      <Stack.Screen name="Visualizar Tarefas" component={VisualizarTarefasScreen} />
    </Stack.Navigator>
  </NavigationContainer>


  )
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30,
  },
  btn: {
    backgroundColor: '#84a287',
    width: width * 0.8,
    height: width * 0.23,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  btnContent: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'flex-start',
    width: '100%',
    paddingLeft: 20,
  },
  btnIcon: {
    width: width * 0.2,
    height: width * 0.2,
  },
  btnTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    flex: 1,
    marginRight: 0,
  },
});