// script.js

// Функция для шифрования текста по таблице
function encrypt() {
    let plaintext = document.getElementById('input').value.toUpperCase().replace(/[^A-Z\s-]/g, ''); // Учитываем пробелы
    let columns = 5; // Фиксированное количество столбцов
    let rows = Math.ceil(plaintext.length / columns); // Вычисляем количество строк
    let plusone = Math.ceil(plaintext.length % columns);

    // Заполняем матрицу символами
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    let index = 0;
    for (let j = 0; j < columns; j++) {
        for (let i = 0; i < rows; i++) {
            if (i == rows - 1) {
                if (plusone > 0) {
                    plusone -= 1;
                    matrix[i][j] = plaintext[index++];
                }
                else {
                    matrix[i][j] = '-';
                }
            }
            else {
                matrix[i][j] = index < plaintext.length ? plaintext[index++] : ' ';
            }
        }
    }

    // Формируем зашифрованный текст из столбцов матрицы
    let ciphertext = '';
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            ciphertext += matrix[i][j];
        }
    }

    // Выводим зашифрованный текст
    document.getElementById('output').value = ciphertext;

    // Отображаем зашифрованные символы в таблице
    const cipherTable = document.getElementById('cipher-table');
    cipherTable.style.display = 'block'; // Показываем таблицу

    const cipherTableBody = document.getElementById('cipher-table-body');
    cipherTableBody.innerHTML = ''; // Очищаем содержимое таблицы

    for (let i = 0; i < rows; i++) {
        const newRow = cipherTableBody.insertRow();
        for (let j = 0; j < columns; j++) {
            const newCell = newRow.insertCell();
            newCell.textContent = matrix[i][j];
        }
    }
}

// Функция для расшифрования текста по таблице
function decrypt() {
    let ciphertext = document.getElementById('input').value.toUpperCase().replace(/[^A-Z\s-]/g, ''); // Учитываем пробелы
    let columns = 5; // Фиксированное количество столбцов
    let rows = Math.ceil(ciphertext.length / columns); // Вычисляем количество строк

    // Формируем расшифрованный текст, проходя по столбцам матрицы
    let plaintext = '';
    for (let j = 0; j < columns; j++) {
        for (let i = j; i < ciphertext.length; i += 5) {
            plaintext += ciphertext[i];
        }
    }

    let result = plaintext.replace(/-/g, '');
    // Выводим расшифрованный текст
    document.getElementById('output').value = result;
}