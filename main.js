function checker(toCheck) {
  returnPrefix = "+254"; // could be "0" or "254"

  // the actual regex
  re = /^((?:254|\+254|0)((?<xa>7(?:(?:[01249][0-9])|(?:5[7-9])|(6[8-9]))[0-9]{6})|(?<xb>1(?:(?:[1][0-1]))[0-9]{6})))$/;

  // check if the regex the input matches the regex
  if (re.test(toCheck)) {
    var x = toCheck.match(re);
    if (x.groups.xa !== undefined && x.groups.xb !== undefined) {
      return [returnPrefix + x.groups.xa, returnPrefix + x.groups.xb];
    } else if (x.groups.xa !== undefined) {
      return returnPrefix + x.groups.xa;
    } else if (x.groups.xb !== undefined) {
      return returnPrefix + x.groups.xb;
    }
  } else return "not a Safaricom number";
}

console.log(checker("0723757615"));
