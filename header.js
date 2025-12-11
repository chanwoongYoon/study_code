const headerMaster = document.getElementById("header_master");
const header = document.getElementById("header1");

const headerMasterCode = headerMaster ? headerMaster.innerHTML : "header_master 요소를 찾을 수 없습니다.";
const headerCode = header ? header.innerHTML : "header 요소를 찾을 수 없습니다.";

console.log(headerMasterCode);
console.log(headerCode);
