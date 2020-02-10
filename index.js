function noneEmpty(){
    let inputs = document.getElementsByClassName('form-control');
    for(let i = 0; i < inputs.length;  i++){
        if(inputs[i].value === ''){
            return false;
        }
    }
    return true;
}
function reset(){
    let inputs = document.getElementsByClassName('form-control');
    let output = document.getElementById('output');
    output.value = '';
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
}
let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', (event) => {
    let output = document.getElementById('output');
    let filled = noneEmpty();
    if(!filled){
        output.value = 'Please fill all fields and try again';
        return;
    } else{
        output.value = `The ${document.getElementById('input-adj').value} ${document.getElementById('input-person').value} was walking down the road when
        (s)he saw the old man ${document.getElementById('input-verb').value}. (S)He joined the old man in ${document.getElementById('input-verb').value}, 
        and once ${document.getElementById('input-plural-pronoun').value} finished, ${document.getElementById('input-plural-pronoun').value} started  ${document.getElementById('input-plural-verb').value}`;
        return;

    }
});
let resetBtn = document.getElementById('reset-button');
resetBtn.addEventListener('click', (event) => {
    reset();
});