import { theme } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 44,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    flexDirection: "row",
    gap: 7,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.white,
  },
})
