import React, { useState } from 'react'
import {View, Text} from 'react-native'
import GlobalScreen from '../../components/ui/global-screen'
import FullScrollView from '../../components/ui/full-scroll-view'
import { Stack, useRouter } from 'expo-router'

const MyPostsScreen = () => {

    const [data, setData] = useState();
    //TODO fetch data
    return (
        <GlobalScreen>
          <FullScrollView>
            <Stack.Screen
              options={{
                headerBackTitleVisible: false,
                headerTitle: 'My Posts',
              }}
            />
            
          </FullScrollView>
        </GlobalScreen>
        // <View>
        //     <Text>asdfd</Text>
        // </View>
      )
};

export default MyPostsScreen;