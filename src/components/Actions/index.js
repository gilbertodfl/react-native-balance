import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function Actions() {
 return (
   <View style={styles.container} >
        <Text style={styles.title}>Ações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -28}
  })    
