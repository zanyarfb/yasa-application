import { View, Text,SafeAreaView,TouchableOpacity,Image,ActivityIndicator,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { assets } from '../../constants'
import SendicateInstCardsPage from './SendicateInstCardsPage'
import { useNavigation } from '@react-navigation/native'


const SendicateInstPubPage = () => {
    const navigation=useNavigation()

    const [dbase,setDbase] = useState([])
  const [isLoading,setIsLoading] = useState(false)


  const fetchData = async()=>{
    setIsLoading(true)
    try{
      const response = await fetch('https://api.yasa-app.com/popular_question-home')
      const result = await response.json()
    
      setDbase(result)
    
    
    
    
    
    
    } catch(error){
      console.log("error is"+error)
    }finally{
      setIsLoading(false)
      
    }
    }
    
    useEffect(()=>{
      fetchData();
    },[])
    
  







  return (

    <SafeAreaView className="bg-gray-50 flex-1">

<ScrollView showsVerticalScrollIndicator={false}>

      <View className="items-center mt-5">

      {isLoading ? (
        <ActivityIndicator size="large" color="#06755d" />
      ) : (
        <View>
          {dbase.length > 0 ? (
            dbase.map((item, index) => (
              <View key={item.id}>
               <InstPublishCardsPage 
          
          key={item.id} 
          id={item.id}
          imgUrl={item.cover.img}
          title={item.title}
          paragraph={item.paragraph}
          publisherName={item.publisher_name}
          publisherImg={item.publisher_img}
          
         />
              </View>
            ))
          ) : (
            <View className="mt-8 items-center">
            <Text className="text-gray-500 font-[Bold] ">هیچ داتایەک بەردەست نیە</Text>
            </View>
          )}
        </View>
      )}

      </View>

      </ScrollView>


    </SafeAreaView>




   
  )
}

export default SendicateInstPubPage