import { View, Text,Image, TouchableOpacity,FlatList,ActivityIndicatorBase } from 'react-native'
import React,{useState,useEffect} from 'react'
import { assets,PrsyaraBawakanData } from '../constants'
import PrsyarabawakanCardsHome from './PrsyarabawakanCardsHome'
import { useNavigation } from '@react-navigation/native'


const PrsyaraBawakanHome = () => {


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
    <View className="flex-1">
      <View className=" mt-4 mx-4 h-10 flex-row-reverse justify-between ">
           <Text className="font-[Bold] text-xl text-right h-10 pt-3 text-[#4c4c4c]">پرسیارە باوەکان</Text>
           <TouchableOpacity className="items-center flex-row-reverse justify-center" onPress={()=>navigation.navigate("PrsyarabawakanPage")}>
            <Text className="font-[Bold] text-sm text-right h-10 pt-3 text-[#06755d]">زیاتر ببینە</Text>
            <Image source={assets.SeeMoreButton} resizeMode='contain' className="h-5 w-4 mr-1" />
           </TouchableOpacity>
        </View>


        <View className="mt-2 mx-0">
          <FlatList
           data={dbase}
           keyExtractor={item=>item.id}
           renderItem={({item,index})=>{
            return(
            <PrsyarabawakanCardsHome
            key={item.id} 
            id={item.id}
            imgUrl={item.cover_img}
            title={item.title}
            paragraph={item.paragraph}
            publisherName={item.publisher_name}
            publisharImage={publisher_img}
            />
            )
           }}
           horizontal
           showsHorizontalScrollIndicator={false}
           inverted
           
          />

        {/* {PrsyaraBawakanData?.map(({id,imgCover,title,})=>(
            <PrsyarabawakanCardsHome
            key={id}
            id={id}
            imgUrl={imgCover}
            
            
            />
        ))} */}
        </View>


    </View>
  )
}

export default PrsyaraBawakanHome