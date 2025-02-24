import { View } from 'react-native'
import { TextInputProps } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import "../../stylesheets/globals.css"
import { styles } from '../../stylesheets/masks'

type InputProps = TextInputProps

export function InputDate({ ...rest }: InputProps) {
  return (
    <View className="w-full pt-2">
      <TextInputMask
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY',
        }}
        style={styles.input}
        {...rest}
      />
    </View>
  )
}
