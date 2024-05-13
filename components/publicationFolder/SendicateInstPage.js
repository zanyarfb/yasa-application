import { View, Text,SafeAreaView,TouchableOpacity,Image,ActivityIndicator,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { assets,PrsyaraBawakanData } from '../constants'
import SendicateInstCardsPage from './SendicateInstCardsPage'
import { useNavigation } from '@react-navigation/native'


const SendicateInstPage = () => {
    const navigation=useNavigation()

    const [dbase,setDbase] = useState([])
  const [isLoading,setIsLoading] = useState(false)


  const fetchData = async()=>{
    setIsLoading(true)
    try{
      const response = await fetch('https://api.yasa-app.com/popular_question-page')
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
      <View className=" items-end mx-5">
      <TouchableOpacity onPress={()=>navigation.goBack()} className="w-10 mt-5">
           <Image source={assets.backbuttongreentoright} resizeMode='contain' className="h-10 w-10" />
        </TouchableOpacity>
      </View>

<ScrollView showsVerticalScrollIndicator={false}>

      <View className="items-center mt-9">

      {
  isLoading ? (
    <ActivityIndicator size="large" color="#06755d" />
  ) : (
    <View>
      {
        dbase?.map((item,index)=>{

       
          
        return(
          
          <SendicateInstCardsPage 
          
           key={item.id} 
           id={item.id}
           imgUrl={item.cover_img}
           title={item.title}
           paragraph={item.paragraph}
           publisherName={item.publisher_name}
           publisherImg={item.publisher_img}
           
          />
         
        )
        }
        )
      }

    </View>
  )
}

      </View>

      </ScrollView>


    </SafeAreaView>




   
  )
}

export default SendicateInstPage