import AsyncStorage from "@react-native-async-storage/async-storage"

const CONTACTS_COLLECTION = "my-contacts-app:contacts"

async function get() {
  try {
    const storage = await AsyncStorage.getItem(CONTACTS_COLLECTION)
    return storage ? storage.split(",") : []
  } catch (error) {
    throw error
  }
}

async function favorite(id: string) {
  try {
    const storage = await get()
    const isFavorite = storage.find((contact) => contact === id)

    let contacts

    if (isFavorite) {
      contacts = storage.filter((contact) => contact !== id)
    } else {
      contacts = [...storage, id]
    }

    await AsyncStorage.setItem(CONTACTS_COLLECTION, contacts.toString())
  } catch (error) {
    throw error
  }
}

export const contactStorage = { get, favorite }
