export const CreateDate = () => {
  const config = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const dateTimeFormat = new Intl.DateTimeFormat("default", config);

  var day = new Date();
  console.log(day); // Apr 30 2000

  var nextDay = new Date(day);
  nextDay.setDate(day.getDate() + 1);
  console.log(nextDay); // May 01 2000

  return {
    today: dateTimeFormat.formatToParts(day),
    tomorrow: dateTimeFormat.formatToParts(nextDay)
  };
};
