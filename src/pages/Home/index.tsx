import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
const list =[
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2025',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix cliente X',
    value: '2500,00',
    date: '10/09/2025',
    type: 1 //receita     
  },  
    {
    id: 3,
    label: 'Salário',
    value: '12500,00',
    date: '15/09/2025',
    type: 1 //receita     
  },  


]
export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Gilberto!!"/>
      <Balance saldo="3222,00" gastos="2828,33"/>
      <Actions />
      <Text style={styles.title}>Extrato</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
    marginBottom: 8,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
   
});
