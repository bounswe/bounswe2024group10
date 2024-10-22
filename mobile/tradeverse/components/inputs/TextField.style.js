import { StyleSheet } from 'react-native';
import { SIZES, SIZE_CONSTANT } from '../../constants/theme';

const outlinedStyle = StyleSheet.create({
  width: '100%'
});

const filledStyle = StyleSheet.create({
  width: '100%',
  height: SIZE_CONSTANT * 4.8,
  backgroundColor: '#FAFAFA',
  padding: SIZE_CONSTANT * 1.5,
  display: 'flex',
  alignItems: 'center',
  borderRadius: 6,
  color: '#3C3B3B',
  fontSize: SIZES.small,
  fontWeight: 'regular',
  borderWidth: 1,
  borderColor: '#F8F8F8',
  label: {
    color: '#3C3B3B',
    fontSize: SIZES.small,
    fontWeight: 'regular',
    marginBottom: SIZE_CONSTANT * 0.4,
    paddingLeft: SIZE_CONSTANT * 0.4
  },
  error: {
    label:{
      color: '#D63A3A',
    },
    container: {
      backgroundColor: '#FEF6F6',
      borderColor: "transparent",
    },
    helperText: {
      color: '#D63A3A'
    }
  }
});

const borderedStyle = StyleSheet.create({
  width: '100%',
  height: SIZE_CONSTANT * 4.8,
  padding: SIZE_CONSTANT * 1.5,
  display: 'flex',
  alignItems: 'center',
  borderRadius: 6,
  color: '#3C3B3B',
  fontSize: SIZES.small,
  fontWeight: 'regular',
  borderWidth: 1,
  borderColor: '#F8F8F8',
  label: {
    color: '#3C3B3B',
    fontSize: SIZES.small,
    fontWeight: 'regular',
    marginBottom: SIZE_CONSTANT * 0.4,
    paddingLeft: SIZE_CONSTANT * 0.4
  },
  error: {
    label:{
      color: '#D63A3A',
    },
    container: {
      borderColor: '#D63A3A',
    },
    helperText: {
      color: '#D63A3A'
    }
  }
});

const styles = {
  outlined: outlinedStyle,
  filled: filledStyle,
  bordered: borderedStyle
};

export default styles;
