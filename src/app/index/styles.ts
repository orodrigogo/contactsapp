import { StyleSheet } from "react-native"

import { theme } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 32,
    marginVertical: 64,
    color: theme.colors.black,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 22,
    color: theme.colors.gray_400,
    marginTop: 32,
  },
  contentContainer: {
    gap: 12,
    paddingVertical: 24,
  },
})
