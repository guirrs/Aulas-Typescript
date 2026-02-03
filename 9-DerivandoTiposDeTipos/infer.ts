function add(a: number, b: number){
    return a+b;
}

type AddFm = typeof add;
//* (...(atributo): any[]) permite aceitar quaisquer valores do array
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : T;

type AddFnReturnValueType = ReturnValueType<AddFm>;