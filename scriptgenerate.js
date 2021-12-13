let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const compareRandom = ( ) => Math.random() - 0.5;

const randomInteger = ( min, max ) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

function generatePassword() {
    let arr = [];
    arr = arr.concat(arr_num);
  
    arr.sort(compareRandom);
    let password = '';
    let passLenght = document.getElementById('passLenght').value;

    for (let i = 0; i < passLenght; i++) {
        password += arr[randomInteger(0, arr.length - 1)];
    }

    document.getElementById('result').value = password;
}

document.querySelector('#pass_start').addEventListener('click', generatePassword);

