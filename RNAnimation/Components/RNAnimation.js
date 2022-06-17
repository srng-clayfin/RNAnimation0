import { StyleSheet, Text, View,Animated, ScrollView } from 'react-native'
import React, { useEffect } from 'react'


const RNAnimation = () => {
    const Fade= new Animated.Value(0)
    const An = new Animated.Value(1)
    const Spring= new Animated.Value(0.2)

    const Spin =  new Animated.Value ( 0 )
const SpinValue =  Spin.interpolate ({
inputRange :  [ 0, 1 ],
outputRange :  [ '0deg', '360deg' ]
} )
    useEffect(()=>{
        Animated.sequence(
            [
                Animated.timing(Fade,{
                   toValue:1,
                   height: 200,
                   duration:1000, 
                   useNativeDriver: true 
                 }),
                 Animated.timing(Fade,{
                    toValue:0,
                    height: 200,
                    duration:1000, 
                    useNativeDriver: true 
                  })
            ]
        ).start()

       

         
     },[Fade])

     useEffect(()=>{
        Animated.spring(Spring,{
            toValue:0.5,
            friction:1,
            useNativeDriver:true}).start()

     },[Spring])

     
useEffect(()=>{
    Animated.timing(Spin,{
       toValue:1,
       duration:3000,
       useNativeDriver:true
   }).start()
 },[Spin])
  return (
    <ScrollView>
        <Animated.View style= { { opacity:Fade,justifyContent:'center',alignItems:'center',backgroundColor:'steelblue' } }>
            <Text >Animation</Text>
            <Text>Animation</Text>
            <Text>Animation</Text>
            <Text>Animation</Text>
            <Text>Animation</Text>
        </Animated.View>

                {/* //Spring */}
        <View style={{backgroundColor:'lightblue',justifyContent:'center',alignItems:'center'}}>

            < Animated.Image
                    style={{height:150,width:150,marginTop:8,transform:[{rotate:SpinValue}]}} 
                    source={{ uri: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80" }}
                    >
            </Animated.Image >     
            
        </View>
        <View>
            <Animated.Image  
                style={{height:400,width:400,transform:[{scale:Spring}]}}
                source={{ uri: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80" }}
                    >
            </Animated.Image>
        </View>
    </ScrollView>
  )
}

export default RNAnimation