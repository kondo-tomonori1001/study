console.log('hello world');

const promiseFunc = () => {
  return new Promise((resolve,reject) => {
    someAsynchronousFunc(() => {
      // 非同期処理
    }).then(() => {
      // 非同期処理が成功した場合
      return resolve('成功!');
    }).catch(() => {
      // 非同期処理が失敗した場合
      return reject('失敗!');
    })
  })
}

console.log(promiseFunc());