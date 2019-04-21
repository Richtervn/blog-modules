import words from './words.json';

const swap = (array, i, j) => {
  if (i !== j) {
    let swap = array[i];
    array[i] = array[j];
    array[j] = swap;
  }
};

class WordResolver {
  constructor() {
    this.isSearching = false;
  }

  stop() {
    this.isSearching = false;
  }

  permute(array) {
    const res = [];
    this.permute_rec(res, '', array);
    return res;
  }

  permute_rec(res, str, array) {
    if (array.length === 0) {
      res.push(str);
    } else {
      for (let i = 0; i < array.length; i++) {
        if (this.isSearching === false) {
          break;
        }
        swap(array, 0, i);
        this.permute_rec(res, str + array[0], array.slice(1));
        swap(array, 0, i);
      }
    }
  }

  xpermute_rec(res, sub, array, word_length) {
    if (array.length === 0) {
      if (sub.length > 0 && sub.length === word_length) this.permute_rec(res, '', sub);
    } else {
      this.xpermute_rec(res, sub, array.slice(1), word_length);
      this.xpermute_rec(res, sub.concat(array[0]), array.slice(1), word_length);
    }
  }

  permute_of_all_size(array, word_length) {
    const res = [];
    this.xpermute_rec(res, [], array, word_length);
    return res;
  }

  resolve(characters, wordLength) {
    this.isSearching = true;
    const length = wordLength ? parseInt(wordLength, 10) : characters.length;
    const permutations = this.permute_of_all_size(characters, length).filter(i => i.length > 1);
    return words.filter(w => permutations.includes(w));
  }
}

export default WordResolver;
