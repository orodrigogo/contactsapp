import { useEffect, useId, useRef, useState } from "react"
import { Alert, FlatList, Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"
import BottomSheet from "@gorhom/bottom-sheet"

import * as Contacts from "expo-contacts"

import { theme } from "@/theme"
import { styles } from "./styles"

import { Input } from "@/components/input"
import { Contact, ContactProps } from "@/components/contact"

export default function Index() {
  const [name, setName] = useState("")
  const [contacts, setContacts] = useState<ContactProps[]>([])

  // BOTTOM SHEET
  const bottomSheetRef = useRef<BottomSheet>(null)
  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  async function fetchContacts() {
    try {
      const { status } = await Contacts.requestPermissionsAsync()

      if (status === Contacts.PermissionStatus.GRANTED) {
        const { data } = await Contacts.getContactsAsync({
          name: name.length > 0 ? name : undefined,
        })

        setContacts(
          data.map((contact) => ({
            id: contact.id ?? useId(),
            name: contact.name,
            phone: contact.phoneNumbers?.[0].number,
            image: contact.image,
          }))
        )
      }
    } catch (error) {
      Alert.alert("Contatos", "Não foi possível carregar os contatos")
      console.log(error)
    }
  }

  function handleOpenDetails(id: string) {
    handleBottomSheetOpen()
  }

  useEffect(() => {
    fetchContacts()
  }, [name])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos</Text>

      <Input>
        <Feather name="search" size={16} color={theme.colors.gray_300} />
        <Input.Field
          onChangeText={setName}
          value={name}
          placeholder="Pesquisar pelo nome"
        />

        {name.length > 0 && (
          <Feather
            name="x"
            size={16}
            color={theme.colors.gray_300}
            onPress={() => setName("")}
          />
        )}
      </Input>

      <Text style={styles.subtitle}>Contatos listados ({contacts.length})</Text>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Contact contact={item} onPress={() => handleOpenDetails(item.id)} />
        )}
        contentContainerStyle={styles.contentContainer}
      />

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={[0.01, 284]}
        backgroundStyle={{
          borderWidth: 1,
        }}
        handleComponent={() => null}
      >
        <Text>Teste</Text>
      </BottomSheet>
    </View>
  )
}
