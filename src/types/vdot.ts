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

export type WorkoutPaces = ShortRange & MediumRange & LongRange;
