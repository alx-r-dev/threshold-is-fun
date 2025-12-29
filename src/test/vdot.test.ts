import Vdot from "../utils/vdot";
import { describe, it, expect } from "vitest";

// These calculations are pure math and physics and will not change
// This result is from a 00:17:45 minute 5k
const vdotResults = {
  normalizeHhMmSs: {
    hoursToMinutes: 0,
    minutes: 17,
    secondsToMinutes: 0.75
  },
  totalMinutes: 17.75,
  metersPerMinute: 281.6901408,
  oxygenCost: 54.99261,
  fractionOfVO2Max: 0.96067,
  vdot: 57.2436908,
  vO2ForThreshold: 50.3744479,
  thresholdMetersPerMinute: 262.354959,
  trainingPaces: {
    pacePerKilometerThreshold: 228.6977921254442,
    pacePerMileThreshold: 368.05250477916235
  },
  formattedTrainingPaces: {
    easy: {
      easyPaceKilometerFormatted: "5:17",
      easyPaceMileFormatted: "8:30"
    }
  },
  formatPace: "17:45", // 1065 seconds
  racePaces: {
    kilometer: {
      threshold: "3:49",
      easy: "5:17"
    },
    mile: {
      threshold: "6:08",
      easy: "8:30"
    }
  },
  paces: {
    easy: {
      easyPaceKilometerFormatted: "5:17",
      easyPaceMileFormatted: "8:30"
    }
  },
  shortIntervalRanges: ["6:03", "6:14"],
  mediumIntervalRanges: ["6:12", "6:23"],
  longIntervalRanges: ["6:21", "6:32"],
  masBands: {
    shortRanges: ["6:03", "6:14"],
    mediumRanges: ["6:12", "6:23"],
    longRanges: ["6:21", "6:32"]
  }
};

const hhmmssTime = "00:17:45";
const distance = 5000; // 5000m

describe("vdot class", () => {
  it("should return {hoursToMinutes, minutes, secondsToMinutes} of string 00:00:00", () => {
    const result = Vdot.normalizeHhMmSs(hhmmssTime);
    expect(result).toEqual(vdotResults.normalizeHhMmSs);
  });
  it("should return total minutes of the race based on normalizeHhMmSs", () => {
    const result = Vdot.getTotalMinutesOfRace(hhmmssTime);
    expect(result).toEqual(vdotResults.totalMinutes);
  });

  it("should return meters per minute based on distance and time", () => {
    const result = Vdot.calculateMetersPerMinute(distance, hhmmssTime);
    expect(result).toBeCloseTo(vdotResults.metersPerMinute, 2);
  });
  it("should return the oxygenCost based on distance and time", () => {
    const result = Vdot.calculateOxygenCost(distance, hhmmssTime);
    expect(result).toBeCloseTo(vdotResults.oxygenCost, 2);
  });
  it("should return the fraction of your VO2 max you can hold for a race based on time", () => {
    const result = Vdot.calculateFractionOfV02MaxYouCanHoldForRace(hhmmssTime);
    expect(result).toBeCloseTo(vdotResults.fractionOfVO2Max, 2);
  });
  it("should return the vdot score based on distance and time", () => {
    const result = Vdot.calculateVdot(distance, hhmmssTime);
    expect(result).toBeCloseTo(vdotResults.vdot, 2);
  });
  it("should return your VO2 for threshold pace based on distance and time", () => {
    const result = Vdot.calculateV02ForThreshold(distance, hhmmssTime);
    expect(result).toBeCloseTo(vdotResults.vO2ForThreshold, 2);
  });
  it("should return threshold based on distance and time", () => {
    const result = Vdot.calculateThreshold(distance, hhmmssTime);
    expect(result).toBeCloseTo(vdotResults.thresholdMetersPerMinute, 2);
  });
  it("should return threshold by pace based on distance and time", () => {
    const result = Vdot.convertThresholdToPace(distance, hhmmssTime);
    expect(result).toEqual(vdotResults.trainingPaces);
  });
  it("should return formatted training paces based on mas", () => {
    const mas = Vdot.calculateMas(distance, hhmmssTime);
    const result = Vdot.convertToTrainingPaces(mas);
    expect(result).toEqual(vdotResults.formattedTrainingPaces);
  });
  it("should return formatted pace based on time", () => {
    const result = Vdot.formatPace(1065);
    expect(result).toEqual(vdotResults.formatPace);
  });
  it("should return race paces based on distance and time", () => {
    const result = Vdot.convertToRacePace(distance, hhmmssTime);
    expect(result).toEqual(vdotResults.racePaces);
  });
  it("should return normal paces based on distance and time", () => {
    const result = Vdot.calculatePaces(distance, hhmmssTime);
    expect(result).toEqual(vdotResults.paces);
  });
  it("should return short interval ranges based on mas and a pace unit (miles/kilometer)", () => {
    const mas = Vdot.calculateMas(distance, hhmmssTime);
    const paceUnit = "miles";
    const result = Vdot.calculateShortIntervalRanges(mas, paceUnit);
    expect(result).toEqual(vdotResults.shortIntervalRanges);
  });
  it("should return medium interval ranges based on mas and a pace unit (miles/kilometer)", () => {
    const mas = Vdot.calculateMas(distance, hhmmssTime);
    const paceUnit = "miles";
    const result = Vdot.calculateMediumIntervalRanges(mas, paceUnit);
    expect(result).toEqual(vdotResults.mediumIntervalRanges);
  });
  it("should return long interval ranges based on mas and a pace unit (miles/kilometer)", () => {
    const mas = Vdot.calculateMas(distance, hhmmssTime);
    const paceUnit = "miles";
    const result = Vdot.calculateLongIntervalRanges(mas, paceUnit);
    expect(result).toEqual(vdotResults.longIntervalRanges);
  });
  it("should return the mas bands based on distance, time and pace unit (miles/kilometer)", () => {
    const paceUnit = "miles";
    const result = Vdot.calculateMasBands(distance, hhmmssTime, paceUnit);
    expect(result).toEqual(vdotResults.masBands);
  });
});
