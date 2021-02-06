export const callback = () => {
  function getDate(){
    const date = new Date;
  }
}


export const promiseDemo = () => {
  // thenを使ったコールバック処理
  const promiseDemo1 = new Promise(function(resolve,reject){
    // reject();
    setTimeout(function(){
      resolve();
    },1000)
  })
  promiseDemo1.then(function(value){
    console.log("Promise成功")
  })
  // promiseDemo1.catch(function(value){
  //   console.log("Promise失敗")
  // })
  console.log('先に出力')
}