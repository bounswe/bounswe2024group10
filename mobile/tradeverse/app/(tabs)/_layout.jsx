/* eslint-disable react/self-closing-comp */
import { Tabs } from 'expo-router'
import { COLORS } from '../../constants/theme'
import { NAV_OPTIONS } from '../../config/navigation'
import AuthGuard from '../../auth/context/auth-guard'
import CustomTabBar from '../../components/ui/tabbar/index'
import { setAssets } from '@/reduxStore/data-slice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllAssets } from '@/services/asset'
export default function Layout() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const allAssets = await getAllAssets()
        dispatch(setAssets(allAssets))
      } catch (error) {
        console.log('Error fetching assets:', error)
      }
    }
    fetchAssets()
  }, [])

  return (
    <AuthGuard>
      <Tabs
        tabBar={(props) => <CustomTabBar {...props} />}
        initialRouteName="home"
      >
        {NAV_OPTIONS.map((option) => (
          <Tabs.Screen
            key={option.routeValue}
            name={option.name}
            options={{
              ...(option.headerOptions ?? {}),
              title: option.label,
              tabBarIcon: (opt) => {
                return opt.focused ? option.activeIcon : option.icon
              },
              tabBarActiveTintColor: COLORS.primary,
            }}
          />
        ))}
      </Tabs>
    </AuthGuard>
  )
}
