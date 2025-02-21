import React from 'react';
import { View } from 'react-native';


type IconProps = {
  name: string;
  color: string;
  focused: boolean;
  size: number;
  IconComponent: any;
}

export function TabIcon({name, color, focused, size, IconComponent }: IconProps) {
  return (
    <View        
      // style={{
      //   flex: 1,
      //   width: '100%',
      //   backgroundColor: focused ? '#101010' : 'transparent',
      //   borderRadius: 10,
      //   padding: focused ? 5 : 0,
      // }}
    >
      <IconComponent
        name={name}
        size={size}
        color={color}
      />
    </View>
  )
}