let string = "abcab";
let sub_string = "";
let count=0;
for (
  let substring_length = 1;
  substring_length <= string.length;
  substring_length++
) {
  for (let start = 0; start <= string.length - substring_length; start++) {
    let end = start + substring_length - 1;
    for (substring_index = start; substring_index <= end; substring_index++) {
      sub_string = sub_string + string[substring_index];
    }

    if (sub_string[0] == sub_string[substring_length - 1]) {
        count++;
      console.log(sub_string);
    }
    
    sub_string = "";
  }
}
console.log(count);
