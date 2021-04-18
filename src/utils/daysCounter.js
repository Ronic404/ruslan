export default function daysCounter() {
  const date = new Date();
  const d0 = new Date(date.getFullYear(), date.getMonth(), 1);
  const d1 = new Date();

  const ndays = Math.round((d1.getTime()-d0.getTime())/(24*3600*1000));
  const nsaturdays = Math.floor((ndays + d0.getDay()) / 7);

  return ndays - 2*nsaturdays + (d0.getDay()===6) - (d1.getDay()===5);
}