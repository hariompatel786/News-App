import React , {useState,useEffect}  from 'react'
import {StyleSheet, Pressable, View, Text , Linking, Dimensions, ScrollView, Button , Alert , Image } from 'react-native'
import axios from 'axios';





const GetNews = () => {
  
  const [report, setreport] = useState([])
  // const [state, setstate] = useState()

  var [i, seti] = useState(0)
 

  var next = (t) => {
    // setstate(report[t])
    seti(i++)
    }
   


    
    useEffect(()=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=dae26bc782bb4442a3a28920abbdb145`)
    .then(resp=>{
      console.log(resp.data)
      setreport(resp.data.articles)
      // setstate(report[0])
     
      seti(0)
      
    })
    // axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=dae26bc782bb4442a3a28920abbdb145`)
    // .then(resp=>{
     
    //  setstate(resp[0])
      
      
    // })
    // setstate(report[0])
    },[])
    
       return (
        <>
        
        <ScrollView >
        {/* <Image source = {{uri: 'report[].urlToImage'  }}
           style = {{ width: 200, height: 200 }}
        /> */}
        <View style={styles.news}>
      <Image style={{ width: 360, height: 300 , alignItems:'center'}} 
        source={{ uri: `${report[i]?.urlToImage}` }} />
      

        <Text style={{fontWeight: "bold" ,fontSize :20, marginLeft:10, marginTop:10,}}> {report[i] ?.title} </Text>
        {/* <Text> {report[i] ?.description} </Text> */}
        <Text  onPress={() => Linking.openURL(report[i] ?.url)} style={styles.content}   > {report[i] ?.content} </Text>
  
 
  </View>


    
      
    {/* <Pressable style={styles.button2} onPress={() => next(i--) }>
      <Text style={styles.text}>Know more in detail</Text>
    </Pressable> */}
    <View style={styles.div}>
      <Pressable style={styles.button} onPress={() => next(i--) }>
      <Text style={styles.text}>Previous</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={() => next(i++) }>
      <Text style={styles.text}>Next</Text>
    </Pressable>
    </View>
       </ScrollView>
      
      </>
      );
       }
      
       const styles = StyleSheet.create({
        button: {
          alignItems: 'center',
          display:'flex',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          backgroundColor: 'red',
          margin: 5,
          minWidth: 150,
        },
        // button2: {
        //   alignItems: 'center',
         
        //   justifyContent: 'center',
          
        //   backgroundColor: 'red',
        //   marginTop:100 ,
        //   marginBottom:10 ,
        //   minWidth: 100,
        // },
        text: {
          fontSize: 16,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
        },
        div: {
          // marginTop: 400,
          position:'absolute',bottom:20,alignSelf:'center',
         display:'flex',
         flexDirection:'row',
        },
        content: {
          
          marginLeft:10,
          marginTop:10,
          marginBottom: 150,
         fontSize: 17,
         
        },
        news: {
          
         maxWidth: '95%',
         
        },
      });
export default GetNews
