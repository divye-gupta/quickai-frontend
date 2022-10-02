export const CreateDate = () => {
  const config = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const dateTimeFormat = new Intl.DateTimeFormat("default", config);

  var day = new Date();
  console.log(day); // Apr 30 2000

  var dayPlus1 = new Date(day);
  var dayPlus2 = new Date(day);
  dayPlus1.setDate(day.getDate() + 1);
  dayPlus2.setDate(day.getDate() + 2);

  return {
    today: dateTimeFormat.formatToParts(dayPlus1),
    tomorrow: dateTimeFormat.formatToParts(dayPlus2),
  };
};
