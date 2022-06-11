function convertToRoman(num) {
  let str = "";
  str += num;
  let result = [];
  let firstResult = "";
  let secondResult = "";
  let thirdResult = "";
  let fourthResult = "";
  for (let i = 0; i < str.length; i++) {
    if (str.length === 0) {
      result = [];
    } else if (str.length > 0) {
      switch (str[str.length - 1]) {
        case "1":
          firstResult = "I";
          break;
        case "2":
          firstResult = "II";
          break;
        case "3":
          firstResult = "III";
          break;
        case "4":
          firstResult = "IV";
          break;
        case "5":
          firstResult = "V";
          break;
        case "6":
          firstResult = "VI";
          break;
        case "7":
          firstResult = "VII";
          break;
        case "8":
          firstResult = "VIII";
          break;
        case "9":
          firstResult = "IX";
          break;
      }
      switch (str[str.length - 2]) {
        case "1":
          secondResult = "X";
          break;
        case "2":
          secondResult = "XX";
          break;
        case "3":
          secondResult = "XXX";
          break;
        case "4":
          secondResult = "XL";
          break;
        case "5":
          secondResult = "L";
          break;
        case "6":
          secondResult = "LX";
          break;
        case "7":
          secondResult = "LXX";
          break;
        case "8":
          secondResult = "LXXX";
          break;
        case "9":
          secondResult = "XC";
          break;
      }
      switch (str[str.length - 3]) {
        case "1":
          thirdResult = "C";
          break;
        case "2":
          thirdResult = "CC";
          break;
        case "3":
          thirdResult = "CCC";
          break;
        case "4":
          thirdResult = "CD";
          break;
        case "5":
          thirdResult = "D";
          break;
        case "6":
          thirdResult = "DC";
          break;
        case "7":
          thirdResult = "DCC";
          break;
        case "8":
          thirdResult = "DCCC";
          break;
        case "9":
          thirdResult = "CM";
          break;
      }
      switch (str[str.length - 4]) {
        case "1":
          fourthResult = "M";
          break;
        case "2":
          fourthResult = "MM";
          break;
        case "3":
          fourthResult = "MMM";
          break;
      }
    }
    result.push(firstResult, secondResult, thirdResult, fourthResult);
    return result.reverse().join("");
  }
  //   return num;
}

console.log(convertToRoman(12));
