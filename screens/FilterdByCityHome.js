import { View, Text, SafeAreaView, TouchableOpacity, Image,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation,useRoute } from '@react-navigation/native'
import { assets } from '../constants'
import LawyersCard from '../components/LawyersCard'

const FilterdByCityHome = () => {
    const navigation=useNavigation()

    const route = useRoute();
  const selectedCity = route.params?.selectedCity

  





  //----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

const [dbase,setDbase] = useState([])
const [isLoading,setIsLoading] = useState(false)




const fetchData = async()=>{
setIsLoading(true)
try{

const response = await fetch(`https://api.yasa-app.com/lawyers-fbch?city=${selectedCity}`)
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






//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

  return (
    <SafeAreaView className="bg-gray-50 flex-1">
        <View className="items-end mx-10 mt-6">

        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Image source={assets.closeXgray} resizeMode='contain' className="h-10 w-10"/>
        </TouchableOpacity>

        </View>



    <View className="mt-4">
        <FlatList
        data={dbase}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={({item,index})=> <LawyersCard 
        key={item.id.toString()} 
            id={item.id.toString()}
            imgUrl={item.profile_image}
            name={item.name}  
            exper={item.experience}
            ofLocation={item.location}
            city={item.city}
            level={item.level}
            degree={item.degree}
            mobile={item.mobile}
            sendicateImg={item.sendicate_image}
            longitude={item.longitude}
            latitude={item.latitude}
            email={item.email}
            facebook={item.facebook}
            instagram={item.instagram}
            tiktok={item.tiktok}
            linkedin={item.linkedin}
            twitter={item.twitter}
            

        />}
        showsVerticalScrollIndicator={false}
        className="pb-60 mb-10"
        />
    </View>

    </SafeAreaView>
  )
}

export default FilterdByCityHome