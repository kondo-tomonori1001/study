// defaultExport
// 1ファイル（１モジュール）1exportできる
// 評価された後の値をexportしている

export default function defaultExport(value){
  console.log(value);
}

// アロー関数の場合は宣言後にexportする
// const defaultExport2 = () => {
//   console.log('defaultExport');
// }
// export default defaultExport2;