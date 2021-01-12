# 学習の記録（javascriptでのimportとexportの方法）
- webpackやvueを学習する中で学んだJSファイルをモジュール管理する方法についての覚書です。
- JSファイルをモジュール化することで可読性や汎用性を高めることができるはず

## Common.js形式とESModules形式
import、exportする方法として、Common.js形式とESModules形式がある。
いずれの方法も一般的に多く使用されているブラウザの全てで動作するものではないため、webpack、babelを使用することが必須
### Common.js形式
- Node.js環境でモジュールを管理する仕組み
- サーバーサイドで使用することを想定したモジュール管理の仕組み？
### ESModules形式
- ES６で新たに仕様が規程された形式
- ブラウザで使用することができる

## Common.js形式
#### export
``` js
module.exports = function() {
  console.log('common.js import');
}
```

#### import
``` js
const commonModule = require('./common');
commonModule();
```

## ESModules形式
### named import
1モジュールから複数の関数をエクスポートできる
#### export
``` js
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
```
#### import
``` js
import {nameExport,nameExport2,nameExport3, nameExport4} from './nameExport';
nameExport();
nameExport2();
nameExport3();
nameExport4();
```

### default export
1ファイル（１モジュール）1exportできる
#### export
``` js
export default function defaultExport(value){
  console.log(value);
}

// アロー関数の場合は宣言後にexportする
const defaultExport2 = () => {
 console.log('defaultExport');
}
export default defaultExport2;
```

#### import
``` js
import defaultExport from './defaultExport';
defaultExport('defaultExport');
```

### 別名でimport
#### export
``` js
export function func(){
  console.log('anotherName import');
}

export function func2(){
  console.log('anotherName import2');
}
```
#### import
``` js
// ワイルドカードでインポート
import * as anotherName from './anotherName';
anotherName.func();
anotherName.func2();
  
// 別名で関数をインポート
import {func as anotherName2 } from './anotherName'
anotherName2();
```
