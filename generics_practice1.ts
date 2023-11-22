// 一般的に大文字のTで総称型（ジェネリクス）を表す。Tに続いてUやVも使う。
// <と>の間にTを書く、関数の場合は関数名と()の間に<T>を書く。
function identity<T>(arg: T): T { // Tが色々な型に対応する総称型（ジェネリクス）
    return arg;
}
let result1 = identity<string>("藁池 豊"); // 関数に型と値を渡している。
console.log(result1); // コンソールに結果を表示

let result2 = identity(39); //型引数を指定しない場合も型を推論することができる。
console.log(result2); // コンソールに結果を表示
