let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result1= document.getElementById('res1'); 
const result2= document.getElementById('res2');
const result3= document.getElementById('res3');
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
	
	for (let i = 0; i < passLenght; i++) {
				
		password += arr[randomInteger(0, arr.length - 1)];
				
	}	
	result1.innerText = password ;
	password = '';		

	for (let i = 0; i < passLenght; i++) {
				
		password += arr[randomInteger(0, arr.length - 1)];
				
	}	
	result2.innerText = password ;
	password = '';	
	
	for (let i = 0; i < passLenght; i++) {
				
		password += arr[randomInteger(0, arr.length - 1)];
				
	}	
	result3.innerText = password ;
	password = '';	
		
}


pass_start.addEventListener('click', generatePassword);

