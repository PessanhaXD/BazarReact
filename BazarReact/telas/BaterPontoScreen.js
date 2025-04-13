import { Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';

// importando os estilos que serão usados em todas ou quase todas as janelas
import { EstilosGlobais } from '../styles/StylesGlobais';

// pegando as dimensões da janela e aderindo a variavel width
const { width } = Dimensions.get('window');

export default function BaterPontoScreen(){
  return(
    <ScrollView style={EstilosGlobais.container}>
      <Image style={EstilosGlobais.img} source={require('../imagens/bazar.png')} />

      <Text style={styles.titulo}> Banco de Horas </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 40, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#FFFFFF', 
  }, 
})