// Функция для шифрования текста по методу шифра Цезаря
function caesarEncrypt() {
    let plaintext = document.getElementById('input').value.toUpperCase().replace(/[^A-Z\s]/g, ''); // Учитываем только буквы
    let shift = 4; // Количество позиций для сдвига

    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
        let charCode = plaintext.charCodeAt(i);
        let shiftedCharCode = ((charCode - 65 + shift) % 26) + 65; // Применяем сдвиг, сохраняя диапазон букв A-Z
        let encryptedChar = String.fromCharCode(shiftedCharCode);
        ciphertext += encryptedChar;
    }

    document.getElementById('output').value = ciphertext;
}

// Функция для расшифровки текста по методу шифра Цезаря
function caesarDecrypt() {
    let ciphertext = document.getElementById('input').value.toUpperCase().replace(/[^A-Z\s]/g, ''); // Учитываем только буквы
    let shift = 4; // Количество позиций для сдвига

    let plaintext = '';
    for (let i = 0; i < ciphertext.length; i++) {
        let charCode = ciphertext.charCodeAt(i);
        let shiftedCharCode = ((charCode - 65 - shift + 26) % 26) + 65; // Применяем обратный сдвиг
        let decryptedChar = String.fromCharCode(shiftedCharCode);
        plaintext += decryptedChar;
    }

    document.getElementById('output').value = plaintext;
}