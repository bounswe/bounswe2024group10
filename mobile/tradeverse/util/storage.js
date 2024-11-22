//HANDLE STORAGE IN ONE FILE SO PARSING AND STRINGIFYING IS DONE IN ONE PLACE
import AsyncStorage from '@react-native-async-storage/async-storage';

const prefix = 'tradeverse@boun';


export const Storage = {
    setItem: async (key, value) => {
        try {
            const k = `${prefix}:${key}`;
            const v = { data: value };
            console.log(k, v, "storage")
            await AsyncStorage.setItem(k, JSON.stringify(v));
            console.log(`${k} is set to:`, v)
            return true;
        } catch (e) {
            return false;
        }
    },
    getItem: async (key, defaultValue = false) => {
        try {
            const value = await AsyncStorage.getItem(`${prefix}:${key}`);
            if (value === null) {
                return defaultValue;
            }

            return JSON.parse(value).data;
        } catch (error) {
            return defaultValue;
        }
    },
    removeItem: async (key) => {
        try {
            await AsyncStorage.removeItem(`${prefix}:${key}`);
        } catch (error) {
            return error;
        }
    },
}