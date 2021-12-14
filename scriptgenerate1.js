let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result= document.getElementById('result'); 
const lenght= document.getElementById('passLenght');
const pass_start= document.getElementById('pass_start');
const compareRandom = ( ) => Math.random() - 0.5;

const randomInteger = ( min, max ) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

function generatePassword() {
	
	let arr = [];
	
	
    arr = arr.concat(arr_num);
    arr.sort(compareRandom);
	
    let password = '';
    let passLenght = lenght.value;
	
	for (let m = 1; m < 4; m++){
		
		for (let i = 0; i < passLenght; i++) {
			
			password += arr[randomInteger(0, arr.length - 1)];
			
		}
			result.innerText += password + ';';
		password = '';
		
	}
}

pass_start.addEventListener('click', generatePassword);

