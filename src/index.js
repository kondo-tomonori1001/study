// common.js形式でインポート
const commonModule = require('./components/common');
commonModule();

// default exportをインポートする（＝モジュール全体をimport）
import defaultExport from './components/defaultExport';
defaultExport('defaultExport');

// 関数毎のインポート（名前付きエクスポートをインポート）
import {nameExport,nameExport2,nameExport3, nameExport4} from './components/nameExport';
nameExport();
nameExport2();
nameExport3();
nameExport4();

// 別名でインポートする
// ワイルドカードでインポート
import * as anotherName from './components/anotherName';
anotherName.func();
anotherName.func2();

// 別名で関数をインポート
import {func as anotherName2 } from './components/anotherName'
anotherName2();
