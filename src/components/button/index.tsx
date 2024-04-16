import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import { Feather } from "@expo/vector-icons"

import { styles } from "./styles"
import { theme } from "@/theme"

type Props = TouchableOpacityProps & {
  title: string
  icon: keyof typeof Feather.glyphMap
  variant?: "primary" | "secondary"
}

const variants = {
  backgroundColor: {
    primary: theme.colors.blue,
    secondary: theme.colors.green,
  },
}

export function Button({ title, variant = "primary", icon, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: variants.backgroundColor[variant] },
      ]}
      activeOpacity={0.7}
      {...rest}
    >
      <Feather name={icon} size={18} color={theme.colors.white} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
