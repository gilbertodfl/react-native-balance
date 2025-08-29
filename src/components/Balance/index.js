import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Balance({saldo , gastos}){
  return (
    <View style={styles.container}>
      <View styles={styles.item}>
        <Text style={styles.itemTitle}>saldo</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balance}>{saldo}</Text>
            </View>
      </View>
      <View >
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.expenses}>{gastos}</Text>
            </View>
      </View>
    </View>
  )
}

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8000a0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingEnd: 18,
        paddingStart: 18, 
        marginTop: -42,
        marginStart: 14,
        marginEnd: 14,
        paddingTop: 22,
        paddingBottom: 22,
        borderRadius: 10
    },
    itemTitle:{
        color: '#dadada',
        fontSize: 20
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    currencySymbol:{
        color: '#dadada',
        fontWeight: 'bold',
        marginRight: 6,
    },
    balance:{
        fontSize: 22,
        color: '#2ecc71'
    },
    expenses:{
        fontSize: 22,
        color: '#e74c3c'

    }
 })