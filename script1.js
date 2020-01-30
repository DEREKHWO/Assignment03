// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
let i = 1;

while (i <= 7) {
  if (i == 1) {
    console.log("a");
  } else if (i == 2) {
    console.log("ab");
  } else if (i == 3) {
    console.log("abc");
  } else if (i == 4) {
    console.log("abcd");
  } else if (i == 5) {
    console.log("abc");
  } else if (i == 6) {
    console.log("ab");
  } else if (i == 7) {
    console.log("a");
  }
  i++;
}
