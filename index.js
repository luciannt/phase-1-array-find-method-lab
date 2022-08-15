// code your solution here
function superbowlWin(array) {
  const win = array.find((record) => record.result === "W");

  if (win && win.year) return win.year;
}
