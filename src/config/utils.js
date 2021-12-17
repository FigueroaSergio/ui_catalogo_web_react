function formDate(date) {
  let ndate = new Date(date);
  let str =
    ndate.getDate() + "/" + (ndate.getMonth() + 1) + "/" + ndate.getFullYear();
  return str;
}
export { formDate };
