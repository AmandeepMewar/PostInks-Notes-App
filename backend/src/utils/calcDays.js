const calcDays = (postDate) => {
  const today = new Date();
  // console.log(today);
  // console.log(createdDate);

  const oneDay = 1000 * 60 * 60 * 24;

  const diffInTime = today.getTime() - postDate.getTime();

  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
};

export default calcDays;
