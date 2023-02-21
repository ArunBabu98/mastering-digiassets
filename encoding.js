function makeFixedPrecision(value) {
    if ((typeof value != "bigint") && ((typeof value == "number") && (value !== Math.min(value))))
        throw new Error("Invalid Input Type");

    value = BigInt(value);

    if ((value < 0n) || (value > 18014398509481983n))
        throw new Error("Invalid Input Type");

    if (value < 32n)
        return value.toString(2).padStart(8, '0');

    let exponent = 0n;
    while (value % 10n === 0n) {
        exponent++;
        value /= 10n;
    }

    if (value > 4398046511103n) { // max 0 exponent bits
        value *= 10n ** exponent;
        exponent = 0n;
    } else if ((value > 33554431n) && (exponent > 7n)) { //max 3 exponent bits
        value *= 10n ** (exponent - 7n);
        exponent = 7n;
    }

    if (value > 4398046511103n) // 7 bytes
        return "11" + value.toString(2).padStart(54, '0');

    if (value > 17179869183n) // 6 bytes
        return "101" + value.toString(2).padStart(42, '0') + exponent.toString(2).padStart(3, '0');

    if (value > 33554431n) // 5 bytes
        return "100" + value.toString(2).padStart(34, '0') + exponent.toString(2).padStart(3, '0');

    if (value > 131071n) // 4 bytes
        return "011" + value.toString(2).padStart(25, '0') + exponent.toString(2).padStart(4, '0');

    if (value > 511n) //3 bytes
        return "010" + value.toString(2).padStart(17, '0') + exponent.toString(2).padStart(4, '0');

    // 2 bytes
    return "001" + value.toString(2).padStart(9, '0') + exponent.toString(2).padStart(4, '0');
}

console.log(makeFixedPrecision(750));
console.log(makeFixedPrecision(250));


/*
       41       40       32
 01000001 01000000 00110010
 010 00001010000000011 0010
 2+1        5123          2
  3

 5123 * 10^2
 5123 * 100
 512300
*/