import AsyncStorage from "@react-native-async-storage/async-storage";
import { SpendingStorageDTO } from "./spendingStorageDTO";
import { SPENDING_COLLECTION } from "../storageConfig";

export async function SpendingCreate(newSpending: SpendingStorageDTO) {
  try {
    const storage = await AsyncStorage.getItem(SPENDING_COLLECTION);
    const spending: SpendingStorageDTO[] = storage ? JSON.parse(storage) : [];

    const updatedSpending = [...spending, newSpending];

    await AsyncStorage.setItem(SPENDING_COLLECTION, JSON.stringify(updatedSpending));

  } catch (error) {
    console.error(error)
    throw error;
  }
}