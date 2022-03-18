// 주소 기억 데이터 저장이된다.
localStorage.setItem('book','javascript');
localStorage.setItem('it','html');
const str  = localStorage.getItem('book');
console.log(str);

//  객체 
const color = {
  title:'red',
  sample:'apple',
  no:['no01','no02']
}
// localStorage.setItem('sample',color);
// 객체 -> JSON string: stringify() -> storage
const som = JSON.stringify(color);
// console.log(som);
localStorage.setItem('som',som);
const obj = JSON.parse(localStorage.getItem('som'));
console.log(obj);
console.log(obj.sample);
console.log(obj.no);
console.log(obj.no[0]);

// localStorage.removeItem('sample');


