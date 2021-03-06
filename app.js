const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
//const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    checkLength(username, 3, 10);
    checkLength(password, 8, 20);
})

function checkInputs() {
    usernameValue = username.value.trim();
    emailValue = email.value.trim();
    passwordValue = password.value.trim();
    confirmPasswordValue = confirmPassword.value.trim();

    if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!validateEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(confirmPasswordValue === '') {
		setErrorFor(confirmPassword, 'Confirm password cannot be blank');
	} else if(confirmPasswordValue!== passwordValue) {
		setErrorFor(confirmPassword, 'Passwords does not match');
	} else{
		setSuccessFor(confirmPassword);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkLength(input, minlength, maxlength) {
    let field = input.value;
    let minLen = minlength;
    let maxLen = maxlength;

    if(field.length < minLen || field.length > maxLen) {
        setErrorFor(input, 'The field must include between' + minLen + 'and' + maxLen + 'characters!');
        return false;
    } else {
        setSuccessFor(input, 'Your input is accepted!');
        return true;
    }
}