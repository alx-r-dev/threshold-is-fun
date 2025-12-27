import { useState } from "react";
import LocalStorage from "../utils/localStorage";
import Vdot from "../utils/vdot";
import type { NorwegianGridData, VdotFormData } from "../types/vdot";

export const vdotLocalStorageKey = "vdot";
export const norwegianLocalStorageKey = "norwegian";

export const initialVdotLocalStorageValue: VdotFormData = {
  recentRaceTime: "",
  recentRaceDistance: Vdot.mile,
  formatKilometerEasyPace: "",
  formatKilometerThresholdPace: "",
  formatMileEasyPace: "",
  formatMileThresholdPace: "",
  formattedVdotScore: 0
};

export const initialNorwegianLocalStorageValue: NorwegianGridData = {
  paceUnit: "miles"
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
        LocalStorage.setLocalStorage(key, valueToStore);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [vdotFormData, setVdotFormData];
};

export default useLocalStorage;
