
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
export default function Movements({ data }) {
  const [showValue, setShowValue] = React.useState(false);
  return (

    <TouchableOpacity style={style.container} onPress={() => setShowValue(!showValue)} activeOpacity={0.8}>
      <Text style={style.date}>{data.date}</Text>
    <View style={style.content}>
                <Text style={style.label}>{data.label}</Text>      
      {showValue ? (


          <Text style={data.type === 1 ? style.income : style.expenses}>
            {data.type === 1 ? `R$ ` : `R$-`}{data.value}
          </Text>
    

      ) : (
        <View style={style.skeleton}></View>
      )
      }
    </View>      
    </TouchableOpacity>

  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dadada',
    marginBottom: 14,
    paddingStart: 14,
    paddingEnd: 14,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    color: '#dadada',
    fontSize: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: 'bold',
  },
  expenses: {
    color: '#ff3636',
  },
  income: {
    color: '#12a454',
  },
  skeleton: {
    margin: 6,
    width: 80,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#dadada',
  }

})