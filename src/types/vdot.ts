type Paces = {
  threshold: string;
  easy: string;
};

type KilometerTime = {
  kilometer: Paces;
};

type MileTime = {
  mile: Paces;
};

type RunningPaces = KilometerTime & MileTime;

export type VdotTime = RunningPaces;

type WorkoutRanges = {
  metric: string[];
  imperial: string[];
};

type ShortRange = {
  shortRanges: WorkoutRanges;
};

type MediumRange = {
  mediumRanges: WorkoutRanges;
};
type LongRange = {
  longRanges: WorkoutRanges;
};

export type InputForm = {
  recentRaceTime: string;
  recentRaceDistance: number;
};

export type WorkoutPaces = ShortRange & MediumRange & LongRange;

export type VdotFormData = {
  recentRaceTime: string;
  recentRaceDistance: number;
  formatKilometerEasyPace?: string;
  formatKilometerThresholdPace?: string;
  formatMileEasyPace?: string;
  formatMileThresholdPace?: string;
  formattedVdotScore?: number;
};

export type VdotData = {
  vdotScore: number | null;
  vdotPaces: VdotTime | null;
};

export type VdotForm = {
  recentRaceTime: string;
  recentRaceDistance: number;
  formatKilometerEasyPace?: string;
  formatKilometerThresholdPace?: string;
  formatMileEasyPace?: string;
  formatMileThresholdPace?: string;
  formattedVdotScore?: number;
};

export type NorwegianGridData = {
  paceUnit: string;
};
