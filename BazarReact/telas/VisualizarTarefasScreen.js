import { Text, ScrollView, StyleSheet } from 'react-native';

export default function VisualizarTarefasScreen(){
  return(
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>VisualizarTarefas</Text>

      <Text style={styles.texto}>Bem-Vindo ao Visualizar </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', padding: 8,
  }, 
  titulo: {
    fontSize: 40, fontWeight: 'bold', textAlign: 'center'
  }, 
  texto: {
  fontSize: 16, textAlign: 'center', margin: 5, padding: 2
  } 
})