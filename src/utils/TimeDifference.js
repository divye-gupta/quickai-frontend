export const diff_hours = (dt1, dt2) => {
  var diff = (dt1.getTime() - dt2.getTime()) / 1000;
  diff /= 60 * 60;

  console.log(dt2.getDate(), dt1.getDate());

  if (dt2.getFullYear() > dt1.getFullYear()) {
    console.log("From Here");
    return -1;
  } else if (dt2.getMonth() + 1 > dt1.getMonth() + 1) {
    console.log("From Here");
    return -1;
  } else if (dt2.getDate() > dt1.getDate()) {
    console.log("From Here");
    return -1;
  } else if (diff <= 1) {
    console.log("From Here");
    return -1;
  }

  return Math.abs(Math.round(diff));
};
