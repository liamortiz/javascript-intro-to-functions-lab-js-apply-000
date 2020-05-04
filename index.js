function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  let uc = string.toUpperCase()
  let lc = string.toLowerCase()
  
  if (uc == string) {
    return "YES INDEED!"
  }
  if (lc == string) {
    return "I can't hear you!"
  }
}