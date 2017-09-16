export default (text, textLength) => {
  let outputText;
  if(text.length < textLength){
    outputText = text;
  } else {
    outputText = text.slice(0, textLength) + '...';
  }

  return outputText;
}