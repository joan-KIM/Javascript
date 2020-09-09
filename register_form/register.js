const ID_LIST = ['hello', 'test','aaa','minji'];
const NAME_LIST = ['SNGWAN', 'disc','Nemo'];

function isValidatedId (id) {  // ID 중복 검사하는 함수
    // ID_LIST에 id가 있으면 false, 없으면 true
    return !ID_LIST.includes(id);
}

const VALIDATED = 'validated';
const UNVALIDATED = 'unvalidated';

const validation = {
    id : false,
    name : false,
    email: false,
    password: false
}

const $idInput = document.querySelector('#id-input'); // 입력받는 곳
const $idCheck = document.querySelector('#id-check'); // 입력 결과 보여주는 곳

function initValidated($target){
    $target.innerHTML='';
    $target.classList.remove(VALIDATED);
    $target.classList.remove(UNVALIDATED);
}

function validated($target, message) {
    $target.innerHTML = message;
    $target.classList.add(VALIDATED);
    $target.classList.remove(UNVALIDATED);
}

function unvalidated($target, message) {
    $target.innerHTML = message;
    $target.classList.remove(VALIDATED);
    $target.classList.add(UNVALIDATED);
}


function idInputHandler(){
    // 입력창에 아무것도 없으면 안함
    if($idInput.value === '') {
        initValidated($idCheck);
        return;
    }
    // 입력창에 있는 값이 validated 하면 메세지를 보여줌, validated 클래스 적용
    if(isValidatedId($idInput.value)){
        validation.id = true;
        validated($idCheck, '사용가능한 아이디 입니다.')
    }
    // validated 하지 않으면 unvalidated 클래스를 적용
    else{
        validation.id = false;
        unvalidated($idCheck, '중복된 아이디 입니다.')
    }
}

$idInput.addEventListener("input", idInputHandler);  //입력이 발생할 때마다 함수를 실행

const $emailInput = document.querySelector('#email-input'); // 입력받는 곳
const $emailCheck = document.querySelector('#email-check'); // 입력 결과 보여주는 곳

function isValidatedEmail(email){
    return /^[^@]+@[^@]+$/.test(email);
}

function emailInputHandler() {
    if ($emailInput.value === ''){
        initValidated($emailCheck);
        return;
    }

    if (isValidatedEmail($emailInput.value)){
        validation.email = true;
        validated($emailCheck, '올바른 이메일 형식입니다.')

    }else{
        validation.email = false;
        unvalidated($emailCheck, '올바른 이메일 형식이 아닙니다.')
    }
}

$emailInput.addEventListener("input", emailInputHandler);

const $nameInput = document.querySelector('#name-input');
const $nameCheck = document.querySelector('#name-check');

function isValidatedName(name) {  // 닉네임 중복 검사하는 함수
    // NAME_LIST에 닉네임이 있으면 false, 없으면 true
    return !NAME_LIST.includes(name);
}

function nameInputHandler(){
    if($nameInput.value === '') {
        initValidated($nameCheck);
        return;
    }

    if(isValidatedName($nameInput.value)){
        validation.name = true;
        validated($nameCheck, '사용가능한 닉네임 입니다.')

    } else{
        validation.name = false;
        unvalidated($nameCheck, '중복된 닉네임 입니다.')
    }
}

$nameInput.addEventListener("input", nameInputHandler);

const $passwordInput = document.querySelector('#password-input');
const $passwordCheck = document.querySelector('#password-check');

function isValidatedPassword(password) {
    return password.length >= 8 && [/[a-zA-Z]/, /[\d]/, /[\*\(\)\&\^\%\$\#\@\!\~\-\+]/].every(reg => reg.test(password))
}

function passwordInputHandler(){
    if ($passwordInput.value === ''){
        initValidated($passwordCheck);
    }

    if(isValidatedPassword($passwordInput.value)){
        validation.password = true;
        validated($passwordCheck, '사용가능한 비밀번호 입니다.');

    }else{
        validation.password = false;
        unvalidated($passwordCheck, '영어, 숫자, 특수문자를 조합해 8자 이상으로 만들어주세요.')
    }
}

$nameInput.addEventListener("input", nameInputHandler);

const $repasswordInput = document.querySelector('#repassword-input');
const $repasswordCheck = document.querySelector('#repassword-check');

function isValidatedRepassword(password, repassword){
    return password === repassword;
}

function repasswordInputHandler(){
    if ($repasswordInput.value === ''){
        initValidated($repasswordCheck);
        return;
    }

    if (isValidatedRepassword($passwordInput.value, $repasswordInput.value)){
        validated($repasswordCheck, '비밀번호 확인 완료');

        if(isAllValidated()){
            $submitButton.disabled = false;
        }

    } else{
        unvalidated($repasswordCheck, '비밀번호가 다릅니다.');
    }
}

$repasswordInput.addEventListener("input", repasswordInputHandler);

const $submitButton = document.querySelector('#submit-button');
$submitButton.disabled = true;   // 처음 실행됐을 때 disabled

function isAllValidated() {
    return Object.values(validation).every(v => v);
}

function clickHandler(){
    alert('회원가입 성공!');
}

$submitButton.addEventListener('click', clickHandler);

