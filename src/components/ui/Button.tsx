import { TouchableOpacity, View, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'fim' | 'texto';
}

export function Button({ variant = 'texto', title, ...rest }: ButtonProps) {
  return (
    <View className={`w-full mb-3 ${variant === 'fim' ? 'mt-[170px]' : ''}`}>
      <TouchableOpacity
        className={`w-full h-[64px] p-2 rounded-xl items-center justify-center shadow border border-border
          ${variant === 'fim' ? 'bg-white' : 'bg-black'} mt-2`}
        {...rest}
      >
        <Text
          className={`text-2xl font-bold ${variant === 'fim' ? 'text-card' : 'text-white'}`}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
