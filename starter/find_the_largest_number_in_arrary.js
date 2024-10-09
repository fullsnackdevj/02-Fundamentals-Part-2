/*

2. Task Name: Find the Largest Number in an Array
Instructions: Create a function findLargestNumber(arr) that takes an array of numbers and returns the largest number.

Sample Data:

const numbers = [23, 56, 78, 12, 90, 34];
Sample Output:

findLargestNumber(numbers); // 90

*/

const numbers = [23, 56, 78, 12, 90, 34];
let largest = 0;

const findLargestNumber = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
};

findLargestNumber(numbers);

console.log(largest);

/*

Paliwanag:

1.Initialization:

Ang numbers ay isang listahan ng mga numero: [23, 56, 78, 12, 90, 34].
Sinisimulan natin ang variable na largest sa 0, ibig sabihin, ito yung umpisa ng hinahanap nating pinakamalaking numero.

2.Function findLargestNumber:

Yung function na findLargestNumber ay magsisimula sa umpisa ng listahan at iisa-isahin yung mga numero.

3.Sa loob ng loop:

Sa bawat ikot, chine-check kung mas malaki ba yung kasalukuyang numero (arr[i]) kaysa sa naka-store sa largest.

Kapag mas malaki yung numero, papalitan natin yung largest ng numerong yun.
Halimbawa: Sa unang ikot, yung arr[0] ay 23. Dahil mas malaki ito sa largest na 0, kaya magiging 23 na yung largest.

Sa susunod na ikot, yung arr[1] ay 56. Dahil mas malaki siya sa 23, magiging 56 na yung largest.

Ganyan lang ang mangyayari hanggang matapos yung listahan.

4. Output:

Kapag natapos yung loop, kung ano man yung pinakamalaking numero na nakita sa listahan, yun yung naka-store sa largest, at yun ang ipa-print natin gamit yung console.log.


5.Halimbawa:

Sa listahan na [23, 56, 78, 12, 90, 34], ang pinakamalaking numero ay 90, kaya ito yung lalabas.


*/
