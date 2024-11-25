import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import PostCard from '../_components/result-cards/post-result'
import AssetResult from '../_components/result-cards/asset-result'

export default function AssetsView({ data }) {
  return (
    <ScrollView>
      {data.map((a, index) => (
        <AssetResult key={index} asset={a} />
      ))}
    </ScrollView>
  )
}
