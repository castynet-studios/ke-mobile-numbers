function checker(toCheck) {
  returnPrefix = "+254"; // could be "0" or "254"

  // the actual regex
  re = /^((?:254|\+254|0)((?<xa>7(?:(?:[01249][0-9])|(?:5[7-9])|(6[8-9]))[0-9]{6})|(?<xb>1(?:(?:[1][0-1]))[0-9]{6})))$/;

  // check if the regex the input matches the regex
  if (re.test(toCheck)) {
    return toCheck.match(re);
  } else return "not a Safaricom number";
}

console.log(checker("0743665574"));
