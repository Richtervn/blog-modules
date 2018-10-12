import readFile from '../utils/readFile';

export default async filePath => {
  const data = [];
  const sourceBuffer = await readFile(filePath);
  const sourceData = await sourceBuffer.toString();

  // Remove comment lines
  let lines = sourceData.split('\n').filter(line => line.trim().indexOf('//') !== 0);

  lines.forEach(line => {
    // Split line by quotes
    let stringFrags = line
      .trim()
      .split('"')
      .filter(Boolean);

    // Remove comment description
    let commentIndex = -1;
    stringFrags.forEach((frag, i) => {
      if (frag.trim().indexOf('//') == 0) {
        commentIndex = i;
      }
    });
    if (commentIndex > -1) {
      stringFrags = stringFrags.filter((frag, i) => i < commentIndex);
    }

    let lineAttributes = [];
    stringFrags.forEach(stringFrag => {
      if (!isNaN(parseInt(stringFrag))) {
        const attrs = stringFrag
          .split(/\s+/)
          .filter(Boolean)
          .map(attr => attr.trim());
        lineAttributes = lineAttributes.concat(attrs);
      } else {
        lineAttributes = lineAttributes.concat(stringFrag);
      }
    });
    if (lineAttributes.length > 0) {
      data.push(lineAttributes);
    }
  });
  return data;
};
