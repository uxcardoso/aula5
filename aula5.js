function seMultiplica() {
    let num1 = parseInt(prompt('Insira um número:'));
    let num2 = parseInt(prompt('Insira outro número:'))
    if (num1 % num2 == 0) {
        return alert('é multiplo sim')
    } else if (num2 % num1 == 0) {
        return alert('é multiplo sim')
    } else {
        return alert('né não')
    }
}

seMultiplica();
seMultiplica();