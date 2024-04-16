import { TextInput, TextInputProps, View } from "react-native"

import { styles } from "./styles"
import { theme } from "@/theme"
import { ReactNode } from "react"

function Input({ children }: { children: ReactNode }) {
  return <View style={styles.container}>{children}</View>
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      cursorColor={theme.colors.blue}
      placeholderTextColor={theme.colors.gray_300}
      {...rest}
    />
  )
}

Input.Field = Field

export { Input }
