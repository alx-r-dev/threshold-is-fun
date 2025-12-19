type formatPacesBasedOnPaceUnitProps = {
  shortRanges: string[];
  mediumRanges: string[];
  longRanges: string[];
};

function formatPacesBasedOnPaceUnit(
  paces: formatPacesBasedOnPaceUnitProps,
  paceUnit: string
) {
  const unit = paceUnit === "miles" ? "mi" : "km";
  const shortRangeArray = paces.shortRanges;
  const shortRangeString = `${shortRangeArray[0]} - ${shortRangeArray[1]}/${unit}`;
  const mediumRangeArray = paces.mediumRanges;
  const mediumRangeString = `${mediumRangeArray[0]} - ${mediumRangeArray[1]}/${unit}`;
  const longRangeArray = paces.longRanges;
  const longRangeString = `${longRangeArray[0]} - ${longRangeArray[1]}/${unit}`;
  return { shortRangeString, mediumRangeString, longRangeString };
}

export { formatPacesBasedOnPaceUnit };
