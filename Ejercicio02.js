let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const createPhoneNumber = (num) => {
  const phoneNumber = num.map((phoneNum) => {
    if (Number.isInteger(phoneNum) && phoneNum >= 0 && phoneNum <= 9) {
      return phoneNum.toString();
    } else {
      throw new Error("El array contiene elementos que no son enteros positivos o números mayores a 9.");
    }
  });

  if (phoneNumber.length !== 10) {
    throw new Error("El array no tiene la longitud correcta.");
  }

  return `(${phoneNumber[0]}${phoneNumber[1]}${phoneNumber[2]}) 
  ${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}-${phoneNumber[6]}${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}`;
};

try {
  const phoneNumber = createPhoneNumber(num);
  console.log(phoneNumber);
} catch (error) {
  console.error(error.message);
}