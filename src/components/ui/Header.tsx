import { View, Text } from 'react-native';


interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <View className="w-full justify-center items-center bg-black pt-20 pb-10">
      <Text className="text-white font-bold text-4xl">{title}</Text>
      <Text className="text-muted-foreground">{subtitle}</Text>
    </View>
  );
}
