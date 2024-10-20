import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileOption from './_components/account-option';
import ProfileConfig from './profile-config';
import ProfileInfo from './_components/top-profile-info';
import GlobalScreen from '../../components/ui/global-screen';
import { COLORS, SIZE_CONSTANT } from '../../constants/theme';
import FullScrollView from '../../components/ui/full-scroll-view';

export default function AccountRootScreen() {
  return (

      <GlobalScreen>
        <FullScrollView>
          <ProfileInfo />
          {Object.entries(ProfileConfig.sections).map(([key, value]) => (
            <View key={key} style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {value.title.toUpperCase()}
              </Text>
              {value.options.map((option, index) => (
                <ProfileOption
                  isLastOption={index === value.options.length - 1}
                  key={option.title}
                  text={option.title}
                  icon={option.icon}
                  route={option.href}
                  action={option.value === 'logout' ? ()=>{} : option.action}
                />
              ))}
            </View>
          ))}
        </FullScrollView>
      </GlobalScreen>
   
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: SIZE_CONSTANT * 5
  },
  sectionTitle: {
    fontSize: SIZE_CONSTANT * 1,
    color: COLORS.graytext
  }
});
