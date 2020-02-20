function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function sayHiToGrandma(string){
  if (string === string.toUpperCase()) {
    return 'I can\'t hear you!'
  } else if (string === string.toLowerCase()) {
    return 'YES INDEED!'
  } else if (string === 'I love you, Grandma.'){
    return 'I love you, too.'
  }
}
