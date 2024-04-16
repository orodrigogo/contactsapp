import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"

import { styles } from "./styles"

import { Letter } from "../letter"

export type ContactProps = {
  id: string
  name: string
  phone?: string
  image?: ImageProps
}

type Props = TouchableOpacityProps & {
  contact: ContactProps
}

export function Contact({ contact, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {contact.image ? (
        <Image source={contact.image} style={styles.image} />
      ) : (
        <Letter value={contact.name[0].toUpperCase()} />
      )}

      <Text style={styles.name}>{contact.name}</Text>
    </TouchableOpacity>
  )
}
