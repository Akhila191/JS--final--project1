
 

console.clear();


// Q1 
function searchArray(arr, num) {
  let positions = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      positions.push(i);
    }
  }
  if (positions.length === 0) {
    return -1;
  } else if (positions.length === 1) {
    return positions[0];
  } else {
    return positions;
  }
}

console.log(searchArray([1, 2, 3, 4, 5, 1, 3], 4)); 
console.log(searchArray([1, 2, 3, 4, 5, 1, 3], 1)); 
console.log(searchArray([1, 2, 3, 4, 5, 1, 3], 7)); 






//q1
  function search_all(input_array, search_element) {
            var found = [];

            for (var i = 0; i < input_array.length; i++) {
                if (input_array[i] == search_element) found.push(i);
            }

            if (found.length < 1) return -1;
            else if (found.length == 1) return found[0];
            else return found;
        }
            
        console.log(search_all([1, 2, 3, 4, 5, 1, 3], 1));


//q2
 function pattern_1(value) {
            for (var i = 0; i < value; i++) {
                var tem = "";
                for (var j = value; j > i; j--) {
                    tem = tem + j;
                }
                console.log(tem);
            }
        }

        pattern_1(5);

//q3
        function asscending(array) {
            array.sort(function (a, b) { return a - b; });
            return array;
        }

        console.log(asscending([3, 2, 1, 4, 5, 45]));
 

//q4

function checkStrings(a, b) {
   let len1 = a.length;
   let len2 = b.length;
   if(len1 !== len2){
      console.log('Invalid Input');
      return
   }
   let str1 = a.split('').sort().join('');
   let str2 = b.split('').sort().join('');
   if(str1 === str2){
      console.log("True");
   } else { 
      console.log("False");
   }
}
checkStrings("LISTEN","SILENT")
checkStrings("HELLO", "JELLO")

//q5


function ReverseString(str) {
   var temp = "";
            for (var i = str.length - 1; i >= 0; i--) {
                temp = temp + str[i];
            }

            return temp;
    }
      
    console.log(ReverseString("Hello"));