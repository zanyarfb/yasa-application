import { View, Text, FlatList,ActivityIndicator } from 'react-native'
import React, { useState, useEffect, Component } from 'react'
 import { LawyerData } from '../constants'
 import LawyersCard from './LawyersCard'
import { Button } from 'react-native'

const LawyersCardsLawyersPage = () => {
 

  const [dbase,setDbase] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  



const fetchData = async()=>{
setIsLoading(true)
try{
  const response = await fetch('https://api.yasa-app.com/lawyer')
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
    
    <View>

{isLoading ? (
        <ActivityIndicator size="large" color="#06755d" />
      ) : (
        <View>
          {dbase.length > 0 ? (
            dbase.map((item, index) => (
              <View key={item.id}>
                <LawyersCard
                  key={item.id}
                  id={item.id}
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
    
  )
}

export default LawyersCardsLawyersPage