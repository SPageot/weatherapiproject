export  const convertToStandardTime = (
  militaryTime: string | undefined
): string | undefined => {
  const convertHour = militaryTime?.slice(0, 2);
  if (Number(convertHour) > 12) {
    const standardTime = Number(convertHour) - 12;
    const convertTime: string[] | undefined = militaryTime
      ?.slice(2, 5)
      .split("");
    convertTime?.unshift(String(standardTime));
    if (standardTime < 10) {
      return `0${convertTime?.join("")}`;
    } else {
      return convertTime?.join("");
    }
  } else {
    return militaryTime;
  }
};