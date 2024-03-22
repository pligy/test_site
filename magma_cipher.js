// Функция для шифрования текста методом гаммирования с обратной связью (алгоритм Магма)
function magmaEncrypt() {
    let plaintext = document.getElementById('input').value;
    let key = generateKey(plaintext.length); // Генерируем ключ
    let ciphertext = '';

    for (let i = 0; i < plaintext.length; i++) {
        // Применяем операцию XOR между символом текста и символом ключа
        let encryptedCharCode = plaintext.charCodeAt(i) ^ key.charCodeAt(i);
        ciphertext += String.fromCharCode(encryptedCharCode);
    }

    document.getElementById('output').value = ciphertext;
}

// Функция для расшифровки текста методом гаммирования с обратной связью (алгоритм Магма)
function magmaDecrypt() {
    let ciphertext = document.getElementById('input').value;
    let key = generateKey(ciphertext.length); // Генерируем ключ
    let plaintext = '';

    for (let i = 0; i < ciphertext.length; i++) {
        // Применяем операцию XOR между символом шифротекста и символом ключа
        let decryptedCharCode = ciphertext.charCodeAt(i) ^ key.charCodeAt(i);
        plaintext += String.fromCharCode(decryptedCharCode);
    }

    document.getElementById('output').value = plaintext;
}

// Функция для генерации ключа на основе длины текста
function generateKey(length) {
    let key = '';
    for (let i = 0; i < length; i++) {
        // Генерируем случайный символ и добавляем его к ключу
        key += String.fromCharCode(Math.floor(Math.random() * 256));
    }
    return key;
}

