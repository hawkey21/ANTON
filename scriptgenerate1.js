let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_symb = ['!', '@', '#', '$', '%', '?', '-', '+', '=', '~'];

const result1= document.getElementById('res1'); 
const result2= document.getElementById('res2');
const result3= document.getElementById('res3');

const lenght= document.getElementById('passLenght');
const pass_start= document.getElementById('pass_start');

const compareRandom = ( ) => Math.random() - 0.5;
const randomInteger = ( min, max ) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

function generatePassword() {
	
	let arr = [];
	
	if (document.querySelector('#arr_EN').checked) arr = arr.concat(arr_EN);
	if (document.querySelector('#arr_num').checked) arr = arr.concat(arr_num);
    if (document.querySelector('#arr_symb').checked) arr = arr.concat(arr_symb);
	
    arr.sort(compareRandom);
	
    let password = '';
    let passLenght = lenght.value;
	
	for (let i = 0; i < passLenght; i++) {
				
		password += arr[randomInteger(0, arr.length - 1)];
				
	}	
	return password;		
}


pass_start.addEventListener('click', ()=> {result1.innerText = generatePassword(),result2.innerText = generatePassword(),result3.innerText = generatePassword()});

