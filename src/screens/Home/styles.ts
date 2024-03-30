import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: THEME.COLORS.GREY_900,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text: {
    color: THEME.COLORS.WHITE
  }
});