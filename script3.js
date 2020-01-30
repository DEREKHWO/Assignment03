// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

let i = 1;

let a = "# # # #";
let b = " # # # #";
while (i <= 8) {
  if (i % 2 == 0) {
    console.log(a);
  } else if (i % 2 == 1) {
    console.log(b);
  }
  i++;
}
