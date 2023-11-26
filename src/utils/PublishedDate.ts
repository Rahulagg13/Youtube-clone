const PublishedDate = (date: string): string => {
  const newDate = new Date();
  const publishedDate = new Date(date);

  const secValue = newDate.getSeconds() - publishedDate.getSeconds();
  const minValue = newDate.getMinutes() - publishedDate.getMinutes();
  const hoursValue = newDate.getHours() - publishedDate.getHours();
  const dateValue = newDate.getDate() - publishedDate.getDate();
  const monthValue = newDate.getMonth() - publishedDate.getMonth();
  const yearValue = newDate.getFullYear() - publishedDate.getFullYear();

  if (
    yearValue === 0 &&
    monthValue === 0 &&
    dateValue === 0 &&
    hoursValue === 0 &&
    minValue < 1
  ) {
    return ` ${secValue} secs ago`;
  } else if (
    yearValue === 0 &&
    monthValue === 0 &&
    dateValue === 0 &&
    hoursValue < 1
  ) {
    return ` ${minValue} min ago`;
  } else if (yearValue === 0 && monthValue === 0 && dateValue < 1) {
    return ` ${hoursValue} hours ago`;
  } else if (yearValue === 0 && monthValue === 0 && dateValue === 1) {
    return ` ${dateValue} day ago`;
  } else if (yearValue === 0 && monthValue === 0 && dateValue < 7) {
    return ` ${dateValue} days ago`;
  } else if (yearValue === 0 && monthValue === 0 && dateValue >= 7) {
    const weeks = Math.floor(dateValue / 7);
    return ` ${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (yearValue === 0 && monthValue < 1) {
    return ` ${monthValue === 0 ? "this month" : monthValue} month${
      monthValue !== 1 ? "s" : ""
    } ago`;
  } else if (yearValue === 0) {
    return ` ${monthValue} month${monthValue !== 1 ? "s" : ""} ago`;
  } else if (yearValue === 1) {
    return " last year";
  } else {
    return `${yearValue} years ago`;
  }
};

export default PublishedDate;
