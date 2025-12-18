type RacePaces = {
  minutes: number;
  seconds: number;
};

type KilometerTime = {
  kilometer: string;
};

type MileTime = {
  mile: string;
};

type ThresholdPaces = KilometerTime & MileTime;

export type VdotTime = ThresholdPaces;
