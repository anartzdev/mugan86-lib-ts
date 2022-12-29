export const msToTime = (duration: number) => {
  const milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  const hoursRes = hours < 10 ? '0' + hours : hours;
  const minsRes = minutes < 10 ? '0' + minutes : minutes;
  const secondsRes = seconds < 10 ? '0' + seconds : seconds;

  console.log(hoursRes + ':' + minsRes + ':' + secondsRes + '.' + milliseconds);
  return {
    hours,
    minutes,
    seconds,
    milliseconds,
  };
};
