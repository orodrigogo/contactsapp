import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { styles } from "./styles"

type Props = TouchableOpacityProps & {
  value: string
}

export function Letter({ value, style, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  )
}
