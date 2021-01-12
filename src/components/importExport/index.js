const commonModule = require('./common');
import defaultExport from './defaultExport';
import {nameExport,nameExport2,nameExport3, nameExport4} from './nameExport';
import * as anotherName from './anotherName';
import {func as anotherName2 } from './anotherName'


export default function importExport(){
  // ①common.js形式でインポート
  // const commonModule = require('./common');
  commonModule();
  
  // ②default exportをインポートする（＝モジュール全体をimport）
  // import defaultExport from './defaultExport';
  defaultExport('defaultExport');
  
  // ③関数毎のインポート（名前付きエクスポートをインポート）
  // import {nameExport,nameExport2,nameExport3, nameExport4} from './nameExport';
  nameExport();
  nameExport2();
  nameExport3();
  nameExport4();
  
  // 別名でインポートする
  // ワイルドカードでインポート
  // import * as anotherName from './anotherName';
  anotherName.func();
  anotherName.func2();
  
  // 別名で関数をインポート
  // import {func as anotherName2 } from './anotherName'
  anotherName2();
}
