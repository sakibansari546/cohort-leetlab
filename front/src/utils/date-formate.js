export function formateDate(date) {
  const newDate = new Date(date);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formateedDate = newDate.toLocaleDateString(undefined, options);
  const fromatedTime = newDate.toLocaleTimeString("en-US");
  return `${formateedDate} - ${fromatedTime}`;
}
