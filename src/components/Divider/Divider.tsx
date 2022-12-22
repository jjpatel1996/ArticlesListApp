import { FC } from 'react';
import { View } from 'react-native';

import { useDividerStyles } from './styles';
import { DividerProps } from './types';

export const Divider: FC<DividerProps> = ({ style, error }) => {
  const {
    store: { theme },
    styles,
  } = useDividerStyles();

  return (
    <View
      style={[styles.content, { backgroundColor: error ? theme.error : theme.divider }, style]}
    />
  );
};
