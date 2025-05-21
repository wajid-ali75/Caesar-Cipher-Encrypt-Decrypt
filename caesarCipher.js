function encrypt() {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value);
    let result = '';

    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-z]/i)) {
        const code = text.charCodeAt(i);
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      result += char;
    }

    document.getElementById('output').innerText = 'Encrypted: ' + result;
  }

  function decrypt() {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value);
    let result = '';

    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-z]/i)) {
        const code = text.charCodeAt(i);
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
        }
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        }
      }
      result += char;
    }

    document.getElementById('output').innerText = 'Decrypted: ' + result;
  }