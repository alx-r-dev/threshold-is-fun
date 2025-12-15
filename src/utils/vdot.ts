// 1 mile = 1609.34 m
// 2 mile = 3218.69 m
// 5k = 5000m
// 10k = 10000m
// 15k = 15000m
// half marathon = 21082.41 m
// marathon = 42164.81 m
class Vdot {
  static normalizeHhMmSs(time: string) {
    const hms = time.split(":");
    const hours = Number(hms[0]);
    const minutes = Number(hms[1]);
    const seconds = Number(hms[2]);

    // convert to minutes
    const hoursToMinutes = hours * 60;
    const secondsToMinutes = seconds / 60;
    return { hoursToMinutes, minutes, secondsToMinutes };
  }

  static getTotalMinutesOfRace(time: string) {
    const { hoursToMinutes, minutes, secondsToMinutes } =
      this.normalizeHhMmSs(time);
    return hoursToMinutes + minutes + secondsToMinutes;
  }

  static calculateMetersPerMinute(distance: number, time: string) {
    return distance / this.getTotalMinutesOfRace(time);
  }

  static calculateOxygenCost(distance: number, time: string) {
    const metersPerMinute = this.calculateMetersPerMinute(distance, time);
    return (
      -4.6 +
      0.182258 * metersPerMinute +
      0.000104 * Math.pow(metersPerMinute, 2)
    );
  }

  static calculateFractionOfV02MaxYouCanHoldForRace(time: string) {
    //f(t)=0.8+0.1894393e−0.012778t+0.2989558e
    const totalTimeInMInutes = this.getTotalMinutesOfRace(time);
    const firstExponent = -0.012778 * totalTimeInMInutes;
    const secondExponent = -0.1932605 * totalTimeInMInutes;
    const firstMathPow = Math.pow(Math.E, firstExponent);
    const secondMathPow = Math.pow(Math.E, secondExponent);
    return 0.8 + 0.1894393 * firstMathPow + 0.2989558 * secondMathPow;
  }

  static calculateVdot(distance: number, time: string) {
    const speedCost = this.calculateOxygenCost(distance, time);
    const fractionYouCanMaintain =
      this.calculateFractionOfV02MaxYouCanHoldForRace(time);
    return speedCost / fractionYouCanMaintain;
  }

  static calculateV02ForThreshold(distance: number, time: string) {
    return 0.88 * this.calculateVdot(distance, time);
  }

  static calculateThreshold(distance: number, time: string) {
    const squareRootInput =
      Math.pow(0.1822582, 2) -
      4 * 0.000104 * (-4.6 - this.calculateV02ForThreshold(distance, time));
    const squareRoot = Math.sqrt(squareRootInput);
    const numerator = -0.182258 + squareRoot;
    const denominator = 2 * 0.000104;
    return numerator / denominator;
  }

  static convertThresholdToPace(distance: number, time: string) {
    const pacePerKilometer =
      (1000 / this.calculateThreshold(distance, time)) * 60;
    const pacePerMile =
      (1609.344 / this.calculateThreshold(distance, time)) * 60;
    return { pacePerKilometer: pacePerKilometer, pacePerMile: pacePerMile };
  }

  static convertToRacePace(distance: number, time: string) {
    const thresholdPaces = this.convertThresholdToPace(distance, time);
    const pacePerKilometer = thresholdPaces.pacePerKilometer;
    const pacePerMile = thresholdPaces.pacePerMile;
    const perKilometer = {
      minutes: Math.floor(pacePerKilometer / 60),
      seconds: Math.round(pacePerKilometer - 3 * 60)
    };
    const perMile = {
      minutes: Math.floor(pacePerMile / 60),
      seconds: Math.round(pacePerMile - 6 * 60)
    };
    return { kilometer: perKilometer, mile: perMile };
  }
}

export default Vdot;
