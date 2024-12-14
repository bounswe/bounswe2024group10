import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { searchSubforum } from '../../../services/search'
import { COLORS } from '../../../constants/theme'
import SubforumCard from '../_components/result-cards/sub-forum-result'
import NoDataView from '../common/no-data-view'

export default function SubforumsView({ keyword }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await searchSubforum({ keyword })
        if (res) {
          setData(
            res.map((d) => ({
              ...d,
              title: d.name,
            }))
          )
          setLoading(false)
        } else {
          setError('Failed to fetch data')
        }
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [keyword])

  if (loading) {
    return (
      <View style={{ marginTop: 24 }}>
        <ActivityIndicator size="small" color={COLORS.primary500} />
      </View>
    )
  }

  if (!loading && data && data.length === 0) {
    return <NoDataView />
  }

  return (
    <ScrollView>
      {data.map((d) => (
        <SubforumCard key={d.id} subForum={d} />
      ))}
    </ScrollView>
  )
}
