import { ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubforumCard from '../_components/subforum-card'
import { getAllSubforums } from '../../../services/subforum'
import { COLORS } from '../../../constants/theme'

export default function SubforumsView() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await getAllSubforums()
        setData(result.subforums)
      } catch (error) {
        // console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return loading ? (
    <ActivityIndicator
      style={{
        marginTop: 20,
      }}
      color={COLORS.primary500}
    />
  ) : (
    <ScrollView>
      {data.map((sf, index) => (
        <SubforumCard key={index} subForum={sf} />
      ))}
    </ScrollView>
  )
}
