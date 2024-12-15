import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { searchUser } from '../../../services/search'
import { COLORS } from '../../../constants/theme'
import UserCard from '../_components/result-cards/user-result'
import NoDataView from '../common/no-data-view'

export default function UsersView({ keyword }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await searchUser({ keyword })
        if (res) {
          setData(res)
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
      {data.map((d, index) => (
        <UserCard key={d.id ?? index} user={d} />
      ))}
    </ScrollView>
  )
}
