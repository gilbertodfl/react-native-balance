import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'

// https://icons.expo.fyi/Index

import { AntDesign } from '@expo/vector-icons'

import { MotiText, MotiView } from 'moti'

const statusBarHeight = StatusBar.currentHeight ?
      StatusBar.currentHeight 
      : StatusBar.currentHeight + 22


export default function Header({name}) {

    return (
      <View style={styles.container}>
        <MotiView style={styles.content}
          from={{
              translateY: -150,
              opacity: 0,
          }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{
            type: "timing",
            duration: 1800,
            delay: 2
          }}
        >
          <MotiText style={styles.userName}
            from={{
              translateX: -300
            }}
            animate={{
              translateX: 0,
            }}
            transition={{
                type: "timing",
                duration: 800,
                delay: 800
            }}
          >
            {name}

          </MotiText>
          
          <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
            
              <AntDesign name="user" size={27} color="#fff" />


          </TouchableOpacity>
        </MotiView>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000FF',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
    },
    userName:{
        fontSize: 18,
        color: "#fff",
        fontWeight: 'bold'
    }
})