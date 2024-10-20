import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GlobalScreen from '../../components/ui/global-screen';
import { COLORS, SIZE_CONSTANT } from '../../constants/theme';
import FullScrollView from '../../components/ui/full-scroll-view';
import {IconMessage, IconTextCaption, IconArrowRight} from '@tabler/icons-react-native'

export default function CreateRootScreen() {
  return (

      <GlobalScreen>
        <FullScrollView>
             <View style={styles.container}>
                  {/* Main content */}
                  <View style={styles.mainContent}>
                    <Text style={styles.title}>Create</Text>

                    <TouchableOpacity style={styles.button}>
                             <IconMessage />
                      <Text style={styles.buttonText}>Add New Post</Text>
  <IconArrowRight/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                                                    <IconTextCaption />
                      <Text style={styles.buttonText}>Create Sub Forum</Text>
                      <IconArrowRight/>

                    </TouchableOpacity>
                  </View>
                  </View>
        </FullScrollView>
      </GlobalScreen>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  mainContent: {
    flex: 1,
    paddingTop: 50,
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
    borderColor: '#EAEAEA',
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
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
});
