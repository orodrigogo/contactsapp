import { theme } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 7,
    gap: 12,
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 18,
  },
  contact: {
    flex: 1,
  },
  name: {
    color: "#000",
    fontWeight: "500",
    fontSize: 18,
  },
})
