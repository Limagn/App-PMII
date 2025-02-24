import AsyncStorage from "@react-native-async-storage/async-storage";
import { SpendingStorageDTO } from "./spendingStorageDTO";
import { SPENDING_COLLECTION } from "../storageConfig";


export async function SpendingGetAll() {
  try {
    const storage = await AsyncStorage.getItem(SPENDING_COLLECTION);
    const spending: SpendingStorageDTO[] = storage ? JSON.parse(storage) : []
    console.log(spending)
    return spending;
    
  } catch (error) {
    console.error(error);
    throw error;
  }
}