//  ======= FilterMethod =========
// 数値の配列からある数字以上の要素を抽出する
export function filter1(){
  // array1 = [0,1,2,....9]を生成
  let array1 = [...Array(10).keys()];
  const array1Filer = array1.filter(function(value){
    return value > 5;
  })
  console.log(array1Filer);
  console.log(array1);
}

export function filter2(){
  // オブジェクトでのフィルター
  const obj1 = [
    {name:'hoge',gender:'man',age:25,like:['apple','grape']},
    {name:'fuga',gender:'woman',age:30,like:['orange','apple','banana']},
    {name:'foo',gender:'man',age:15,like:['banana','kiwi']},
    {name:'bar',gender:'woman',age:40,like:['melon','apple','banana','kiwi']}
  ]
  
  // 20歳以上を抽出
  const obj1Fil = obj1.filter(function(value){
    if(value.age > 20){
      return value
    }
  })
  console.log(obj1Fil);
  
  // 指定した名前で抽出
  const obj1Name = ['hoge','foo'];
  const obj1FilName = obj1.filter(function(value){
    for(let i in obj1Name){
      if( obj1Name[i] === value.name){
        return value;
      }
    }
  })
  console.log(obj1FilName);
  
  // 好きなフルーツで絞り込み (for文でループ)（or検索）
  const fruit1 = ['banana','kiwi'];
  const obj1FilFruits = obj1.filter(function(item){
    for(let i in item.like){
      for(let j in fruit1){
        if(item.like[i] === fruit1[j]){
          return item
        }
      }
    }
  })
  console.log(obj1FilFruits);
  
  // 好きなフルーツで絞り込み(includesで判定)（AND検索）
  const obj1FilFruitsAnd = obj1.filter(function(item){
    for(let i in fruit1){
      if(item.like.includes(fruit1[i]) === false){
        break
      } else if(item.like.includes(fruit1[fruit1.length - 1])){
        return item
      }
    }
  })
  console.log(obj1FilFruitsAnd);
}

