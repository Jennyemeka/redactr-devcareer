function scrambleText() {
    const originalText = document.getElementById('originalText').value.trim();
    const wordsToScramble = document.getElementById('wordsToScramble').value.trim().toLowerCase().split(' ');
    const replacementOption = document.getElementById('replacement').value.trim();

    if (!originalText || !wordsToScramble.length) {
        alert("Please enter the original text and words to scramble.");
        return;
    }

    let replacementChar;
    if (replacementOption === 'REDACTED') {
        replacementChar = document.getElementById('customReplacementInput').value.trim();
        if (!replacementChar) {
            alert("Please enter a custom replacement character.");
            return;
        }
    } else {
        replacementChar = replacementOption;
    }

    let scrambledText = originalText;

    wordsToScramble.forEach(word => {
        const regex = new RegExp('\\b' + word + '\\b', 'gi');
        scrambledText = scrambledText.replace(regex, replacementChar);
    });

    const wordsScanned = originalText.split(/\s+/).length;
    const matchedWords = wordsToScramble.length;
    const charactersScrambled = originalText.length - scrambledText.length;
    const timeTaken = 0; 

    const output = `Scrambled Text: ${scrambledText}<br>
                    Words Scanned: ${wordsScanned}<br>
                    Matched Words: ${matchedWords}<br>
                    Characters Scrambled: ${charactersScrambled}<br>
                    Time Taken: ${timeTaken} seconds`;

    document.getElementById('output').innerHTML = output;
}

function resetForm() {
    document.getElementById('scramblerForm').reset();
    document.getElementById('output').innerHTML = '';
}

function handleCustomReplacement() {
    const replacementOption = document.getElementById('replacement').value;
    const customReplacementInputWrapper = document.getElementById('customReplacementInputWrapper');

    if (replacementOption === 'REDACTED') {
        customReplacementInputWrapper.style.display = 'block';
        document.getElementById('customReplacementInput').focus();
    } else {
        customReplacementInputWrapper.style.display = 'none';
    }
}
