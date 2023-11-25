function convertor(binaryNumber){
    let decimalNumber = 0;
    for (let i = 0; i < binaryNumber.length; i++) {
        decimalNumber = (decimalNumber << 1) | parseInt(binaryNumber[i]);
    }
    return decimalNumber;
}
console.log(convertor('1011'));
