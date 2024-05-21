module.exports = function toReadable (number) {
  
}
//The function should be able to convert up to 999999   
//The function should return a string
//The function should return a string in the format 'one hundred
//The function should return a string in the format 'one thousand'
//The function should return a string in the format 'one million'


    function toReadable(num) {
        const ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const hundreds = ['hundred', 'thousand', 'million'];

        if (num === 0) {
            return 'zero';
        }

        let result = '';

        if (num >= 1000000) {
            const million = Math.floor(num / 1000000);
            result += toReadable(million) + ' million ';
            num %= 1000000;
        }

        if (num >= 1000) {
            const thousand = Math.floor(num / 1000);
            result += toReadable(thousand) + ' thousand ';
            num %= 1000;
        }

        if (num >= 100) {
            const hundred = Math.floor(num / 100);
            result += ones[hundred - 1] + ' hundred ';
            num %= 100;
        }

        if (num >= 20) {
            const ten = Math.floor(num / 10);
            result += tens[ten - 1] + ' ';
            num %= 10;
        }

        if (num >= 11 && num <= 19) {
            result += teens[num - 11] + ' ';
            num = 0;
        }

        if (num >= 1 && num <= 9) {
            result += ones[num - 1] + ' ';
        }

        return result.trim();
    }




console.log(toReadable(1)); // Will return 'one'
console.log(toReadable(997)); //will return 'nine hundred ninety seven'
console.log(toReadable(1000)); //will return 'one thousand'