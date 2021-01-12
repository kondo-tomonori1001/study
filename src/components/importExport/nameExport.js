// 名前付きEXPORT
// 1モジュールから複数の関数をエクスポートできる

// 先頭にexportをつける
export function nameExport(){
  console.log('nameExport');
}

// 末尾でexport
function nameExport2(){
  console.log('nameExport2')
}
export { nameExport2 }; 

export const nameExport3 = () => {
  console.log('nameExport3');
}

// エクスポートする時に名前を変える
function func(){
  console.log('nameExport4')
}
export { func as nameExport4 };
