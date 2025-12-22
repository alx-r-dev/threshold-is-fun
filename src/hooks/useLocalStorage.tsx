import { useState } from "react";
import LocalStorage from "../utils/localStorage";
import Vdot from "../utils/vdot";

export const localStorageKey = "vdot";

export const initialLocalStorageValue: LocalStorageValue = {
  recentRaceTime: "",
  recentRaceDistance: Vdot.mile,
  formatKilometerEasyPace: "",
  formatKilometerThresholdPace: "",
  formatMileEasyPace: "",
  formatMileThresholdPace: "",
  formattedVdotScore: 0,
  shortRanges: [],
  mediumRanges: [],
  longRanges: []
};

export type LocalStorageValue = {
  recentRaceTime: string;
  recentRaceDistance: number;
  formatKilometerEasyPace: string;
  formatKilometerThresholdPace: string;
  formatMileEasyPace: string;
  formatMileThresholdPace: string;
  formattedVdotScore: number;
  shortRanges: string[];
  mediumRanges: string[];
  longRanges: string[];
};

const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] => {
  const [vdotFormData, setStoredValue] = useState<T>(() => {
    try {
      const item = LocalStorage.getLocalStorage(key);
      return item ? item : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setVdotFormData = (value: T | ((val: T) => T)): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(vdotFormData) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        LocalStorage.setLocalStorage(key, value);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [vdotFormData, setVdotFormData];
};

export default useLocalStorage;
