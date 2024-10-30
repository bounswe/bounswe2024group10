import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SubForumResult from '../_components/result-cards/sub-forum-result'
import TagResult from '../_components/result-cards/tag-result'

export default function TagsView({ data }) {
  return (
    <ScrollView>
      {data.map((t, index) => (
        <TagResult key={index} tag={t} />
      ))}
    </ScrollView>
  )
}
