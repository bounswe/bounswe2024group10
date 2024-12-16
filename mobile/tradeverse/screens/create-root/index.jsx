import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {
  IconMessage,
  IconTextCaption,
  IconArrowRight,
} from '@tabler/icons-react-native'
import { router } from 'expo-router'
import GlobalScreen from '../../components/ui/global-screen'
import { COLORS, SIZE_CONSTANT } from '../../constants/theme'
import FullScrollView from '../../components/ui/full-scroll-view'
import paths from '../../config/screen-paths'
import { AuthContext } from '../../auth/context'

export default function CreateRootScreen() {
  const { user } = useContext(AuthContext)

  return (
    <GlobalScreen>
      <FullScrollView>
        <View style={styles.container}>
          <View style={styles.mainContent}>
            <Text style={styles.title}>Create</Text>

            <TouchableOpacity
              onPress={() => {
                router.push(paths.CREATE.ADD_POST)
              }}
              style={styles.button}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: COLORS.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <IconMessage size={20} color={COLORS.primary700} />
              </View>
              <Text style={styles.buttonText}>Add New Post</Text>
              {/* <IconArrowRight /> */}
            </TouchableOpacity>

            {user?.admin && (
              <TouchableOpacity
                onPress={() => {
                  router.push(paths.CREATE.ADD_SUBFORUM)
                }}
                style={styles.button}
              >
                <IconTextCaption />
                <Text style={styles.buttonText}>Create Sub Forum</Text>
                <IconArrowRight />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </FullScrollView>
    </GlobalScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  mainContent: {
    flex: 1,
    // paddingTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    backgroundColor: COLORS.primary500,
    borderColor: '#EAEAEA',
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    flex: 1,
    marginLeft: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#4B49F5',
    height: 60,
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#624BF6',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
