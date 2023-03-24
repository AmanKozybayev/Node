// let a = [1,2];

// const methodNames = Object.getOwnPropertyNames(a);
// console.log(methodNames);
// let b = a.indexOf(2);
// console.log(b);
// const nums = [2,7,11,15];
// const target = 9;

// let a = [];

// let twoSum = function (nums,target) {
//     for (let i =0; i<nums.length; i++) {
//         let b = target -nums[i];
//         if (nums.indexOf(b)>0){
//             console.log([i,nums.indexOf(b)]);
//         }
//     }
// }
// let target = 6;
// let nums = [3,2,3];

// var twoSum = function(nums, target) {
//   if (nums.length>2){
//     for (let i = 0; i<nums.length; i++) {
//       let b = target - nums[i];
//       if (nums.indexOf(b)>0) {
//         console.log([i,b])
//         return [i,nums.indexOf(b)];
//       }
//     }
//   }
//   else if (nums[0]+nums[1]===target) {
//     console.log()
//     return [0,1];
//   }
// };
// console.log(twoSum(nums,target));

const a = "quertyuiop";
const b = "asdfghjkl";
const c = "zxcvbnm"
const words = ["Hello","Alaska","Dad","Peace"];
const test = "Dad"

let findWords  = function (list) {
    let abcStore = [];
    for(j = 0; j < list.length; j++) {

    //poprobuyu sdelat' na odnom slove
        let aStore ="";
        let bStore = "";
        let cStore = "";
        
        for (i = 0; i < list[j].length; i++) {
            if (a.includes(list[j][i].toLowerCase())) {
                aStore = aStore + list[j][i];
                if (list[j].length === aStore.length) {
                    abcStore.push(aStore);
                }
            }
            else if (b.includes(list[j][i].toLowerCase())) {
                bStore = bStore + list[j][i];
                if (list[j].length === bStore.length) {
                    abcStore.push(bStore);
                }
            else if (c.includes(list[j][i].toLowerCase())) {
                cStore = cStore + list[j][i];
                if (list[j].length === cStore.length) {
                    abcStore.push(cStore);
                }
            }
            }
        }
    }
    console.log(abcStore)
}
findWords(words);

// let findWords = function(words) {
//     let newWords = [];
//     for (i = 0 ; i < words.length; i++) {
//         let newWord = "";
//         let checker = "";
//         //to decomposite every word to charachters 
//         for (j = 0; j< words[i].length; j++) {
//             // console.log(words[i][j].toLowerCase());
//             if (b.toLowerCase().includes(words[i][j].toLowerCase())){
//                 checker = checker+words[i][j];
//                 console.log(checker);
//                 }
//             }
//         }
        
//     }