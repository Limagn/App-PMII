import { TextInput, View, TextInputProps } from 'react-native';

type InputProps = TextInputProps;

export function Input({ ...rest }: InputProps) {
  return (
    <View className="w-full pt-2">
      <TextInput
        className="w-full bg-card p-3 pb-4 text-foreground text-xl mt-0.5 rounded-xl shadow border border-border"
        {...rest}
      />
    </View>
  );
}
