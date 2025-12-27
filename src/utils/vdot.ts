// 1 mile = 1609.34 m
// 2 mile = 3218.69 m
// 5k = 5000m
// 10k = 10000m
// 15k = 15000m
// half marathon = 21082.41 m
// marathon = 42164.81 m

class Vdot {
  static kilometer = 1000; //meters
  static mile = 1609.34; //meters
  static easyPace = 0.65; // 65% MAS
  static #shortIntervalPercentageOfMas = [0.914, 0.887];
  static #mediumIntervalPercentageOfMas = [0.892, 0.866];
  static #longIntervalPercentageOfMas = [0.871, 0.847];

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
    const pacePerKilometerThreshold =
      (this.kilometer / this.calculateThreshold(distance, time)) * 60;
    const pacePerMileThreshold =
      (this.mile / this.calculateThreshold(distance, time)) * 60;
    return {
      pacePerKilometerThreshold: pacePerKilometerThreshold,
      pacePerMileThreshold: pacePerMileThreshold
    };
  }

  static convertToSeconds(pace: number) {
    const secondsPerKilometer = (this.kilometer / pace) * 60;
    const secondsPerMile = (this.mile / pace) * 60;
    return { secondsPerKilometer, secondsPerMile };
  }

  static convertToTrainingPaces(mas: number) {
    const easy = this.easyPace * mas;
    const easyPacePerKilometer = (this.kilometer / easy) * 60;
    const easyPaceKilometerFormatted = this.formatPace(easyPacePerKilometer);
    const easyPacePerMile = (this.mile / easy) * 60;
    const easyPaceMileFormatted = this.formatPace(easyPacePerMile);
    return { easy: { easyPaceKilometerFormatted, easyPaceMileFormatted } };
  }

  static formatPace(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.round(seconds - minutes * 60);
    if (secs === 60) {
      return `${minutes + 1}:00`; // handles 59.5 or 60 seconds rounding
    }
    return `${minutes}:${String(secs).padStart(2, "0")}`;
  }

  static convertToRacePace(distance: number, time: string) {
    const mas = this.calculateMas(distance, time);
    const thresholdPaces = this.convertThresholdToPace(distance, time);
    const thresholdPacePerKilometerInSeconds =
      thresholdPaces.pacePerKilometerThreshold;
    const thresholdPacePerMileInSeconds = thresholdPaces.pacePerMileThreshold;
    const easyPaces = this.convertToTrainingPaces(mas);
    const easyPacePerKilometer = easyPaces.easy.easyPaceKilometerFormatted;
    const easyPacePerMile = easyPaces.easy.easyPaceMileFormatted;
    return {
      kilometer: {
        threshold: this.formatPace(thresholdPacePerKilometerInSeconds),
        easy: easyPacePerKilometer
      },
      mile: {
        threshold: this.formatPace(thresholdPacePerMileInSeconds),
        easy: easyPacePerMile
      }
    };
  }

  static calculateMas(distance: number, time: string) {
    const vdots = this.calculateVdot(distance, time);
    const a = 0.000104;
    const b = 0.182258;
    const c = -(4.6 + vdots);
    const root = Math.pow(b, 2) - 4 * a * c;
    const squareResult = Math.sqrt(root);
    const numerator = -b + squareResult;
    const denominator = 2 * a;
    const result = numerator / denominator;
    return result;
  }

  static calculatePaces(distance: number, time: string) {
    const mas = this.calculateMas(distance, time);
    return this.convertToTrainingPaces(mas);
  }

  static calculateShortIntervalRanges(mas: number, paceUnit: string) {
    const shortIntervals = {
      metric: [
        this.formatPace(
          this.convertToSeconds(mas * this.#shortIntervalPercentageOfMas[0])
            .secondsPerKilometer
        ),

        this.formatPace(
          this.convertToSeconds(mas * this.#shortIntervalPercentageOfMas[1])
            .secondsPerKilometer
        )
      ],
      imperial: [
        this.formatPace(
          this.convertToSeconds(mas * this.#shortIntervalPercentageOfMas[0])
            .secondsPerMile
        ),
        this.formatPace(
          this.convertToSeconds(mas * this.#shortIntervalPercentageOfMas[1])
            .secondsPerMile
        )
      ]
    };
    return paceUnit === "miles"
      ? shortIntervals.imperial
      : shortIntervals.metric;
  }
  static calculateMediumIntervalRanges(mas: number, paceUnit: string) {
    const mediumInterval = {
      metric: [
        this.formatPace(
          this.convertToSeconds(mas * this.#mediumIntervalPercentageOfMas[0])
            .secondsPerKilometer
        ),

        this.formatPace(
          this.convertToSeconds(mas * this.#mediumIntervalPercentageOfMas[1])
            .secondsPerKilometer
        )
      ],
      imperial: [
        this.formatPace(
          this.convertToSeconds(mas * this.#mediumIntervalPercentageOfMas[0])
            .secondsPerMile
        ),
        this.formatPace(
          this.convertToSeconds(mas * this.#mediumIntervalPercentageOfMas[1])
            .secondsPerMile
        )
      ]
    };
    return paceUnit === "miles"
      ? mediumInterval.imperial
      : mediumInterval.metric;
  }
  static calculateLongIntervalRanges(mas: number, paceUnit: string) {
    const longInterval = {
      metric: [
        this.formatPace(
          this.convertToSeconds(mas * this.#longIntervalPercentageOfMas[0])
            .secondsPerKilometer
        ),

        this.formatPace(
          this.convertToSeconds(mas * this.#longIntervalPercentageOfMas[1])
            .secondsPerKilometer
        )
      ],
      imperial: [
        this.formatPace(
          this.convertToSeconds(mas * this.#longIntervalPercentageOfMas[0])
            .secondsPerMile
        ),
        this.formatPace(
          this.convertToSeconds(mas * this.#longIntervalPercentageOfMas[1])
            .secondsPerMile
        )
      ]
    };
    return paceUnit === "miles" ? longInterval.imperial : longInterval.metric;
  }

  static calculateMasBands(distance: number, time: string, paceUnit: string) {
    const mas = this.calculateMas(distance, time);
    const shortRanges = this.calculateShortIntervalRanges(mas, paceUnit);
    const mediumRanges = this.calculateMediumIntervalRanges(mas, paceUnit);
    const longRanges = this.calculateLongIntervalRanges(mas, paceUnit);
    return { shortRanges, mediumRanges, longRanges };
  }
}

export default Vdot;
