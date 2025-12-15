function checkRaceTimeFormat(raceTime: string) {
  const hhmmssFormat = /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
  return hhmmssFormat.test(raceTime);
}

export { checkRaceTimeFormat };
