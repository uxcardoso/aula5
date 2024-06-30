function seMultiplica(num1, num2) {
    if (num1 % num2 == 0) {
        return console.log('é multiplo sim')
    } else if (num2 % num1 == 0) {
        return console.log('é multiplo sim')
    } else {
        return console.log('né não')
    }
}

seMultiplica(30,31);
seMultiplica(80,2);