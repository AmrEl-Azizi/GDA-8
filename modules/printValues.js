
function print(str, message) {

if (message.guild.id == 281223108323704833) {
  switch (str) {
    case "g: Advantage":
      str = "Abil1A";
      break;
    case "g: Success + Advantage":
      str = "Abil1A1S";
      break;
    case "g: Success":
      str = "Abil1S";
      break;
    case "g: Advantage x2":
      str = "Abil2A";
      break;
    case "g: Success x2":
      str = "Abil2S";
      break;
    case "g: Blank":
      str = "AbilBla";
      break;
    case "adv":
      str = "Advantage";
      break;
    case "b: Advantage":
      str = "Boos1A";
      break;
    case "b: Success + Advantage":
      str = "Boos1A1S";
      break;
    case "b: Success":
      str = "Boos1S";
      break;
    case "b: Advantage x2":
      str = "Boos2A";
      break;
    case "b: Blank":
      str = "BoosBla";
      break;
    case "r: Failure":
      str = "Chal1F";
      break;
    case "r: Threat":
      str = "Chal1T";
      break;
    case "r: Failure + Threat":
      str = "Chal1T1F";
      break;
    case "r: Failure x2":
      str = "Chal2F";
      break;
    case "r: Threat x2":
      str = "Chal2T";
      break;
    case "r: Blank":
      str = "ChalBla";
      break;
    case "r: Despair":
      str = "ChalDes";
      break;
    case "ds":
      str = "Dark";
      break;
    case "des":
      str = "Despair";
      break;
    case "p: Failure":
      str = "Diff1F";
      break;
    case "p: Threat":
      str = "Diff1T";
      break;
    case "p: Failure + Threat":
      str = "Diff1T1F";
      break;
    case "p: Failure x2":
      str = "Diff2F";
      break;
    case "p: Threat x2":
      str = "Diff2T";
      break;
    case "p: Blank":
      str = "DiffBla";
      break;
    case "fail":
      str = "Failure";
      break;
    case "w: Dark":
      str = "Forc1D";
      break;
    case "w: Light":
      str = "Forc1L";
      break;
    case "w: Dark x2":
      str = "Forc2D";
      break;
    case "w: Light x2":
      str = "Forc2L";
      break;
    case "ls":
      str = "Light";
      break;
    case "y: Advantage x2":
      str = "Prof2A";
      break;
    case "y: Advantage":
      str = "Prof1A";
      break;
    case "y: Success + Advantage":
      str = "Prof1A1S";
      break;
    case "y: Success":
      str = "Prof1S";
      break;
    case "y: Success x2":
      str = "Prof2S";
      break;
    case "y: Blank":
      str = "ProfBla";
      break;
    case "y: Triumph":
      str = "ProfTri";
      break;
    case "s: Failure":
      str = "Setb1F";
      break;
    case "s: Threat":
      str = "Setb1T";
      break;
    case "s: Blank":
      str = "SetbBla";
      break;
    case "suc":
      str = "Success";
      break;
    case "thr":
      str = "Threat";
      break;
    case "tri":
      str = "Triumph";
      break;
    default:
      break;
  }
}

  if (message.guild.emojis.find('name', str) != null) {
    var final = message.guild.emojis.find('name', str).toString();
  } else {
    var final = str + "\n";
  }
  return final;
}

module.exports = {
    print: print,
};
