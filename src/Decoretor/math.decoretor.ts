import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Add = (a: number, b: number) =>
  createParamDecorator((_data: unknown, _ctx: ExecutionContext) => {
    return a + b;
})();

export const Sub = (a: number,b: number ) => 
    createParamDecorator((_data:unknown,_ctx:ExecutionContext) => {
        return a-b;
})()

export const MUl = (a:number, b:number) => 
    createParamDecorator((_data: unknown,_ctx:ExecutionContext) => {
        return a*b;
})()

export const Div = (a:number, b:number) => 
    createParamDecorator((_data: unknown,_ctx:ExecutionContext) => {
        return a/b;
})()

export const Mod = (a:number, b:number) => 
    createParamDecorator((_data: unknown,_ctx:ExecutionContext) => {
        return a*b;
})()

export const Square = (a:number) => 
    createParamDecorator((_data: unknown,_ctx:ExecutionContext) => {
        return a*a;
})()

export const Cube = (a:number) => 
    createParamDecorator((_data: unknown,_ctx:ExecutionContext) => {
        return a*a*a;
})()

export const Power = (a:number, b: number) => 
    createParamDecorator((_data: unknown,_ctx: ExecutionContext) => {
        let result = 1;
        for (let i = 0; i < b; i++) {
            result *= a;
        }
        return result;
})()

export const Average = (arry:number[]) =>
    createParamDecorator((_data:unknown,_ctx:ExecutionContext) =>{
        if (arry.length === 0) return 0; 
        let result = 0;
        for (let i = 0; i < arry.length; i++) {
            result +=arry[i]
        }
        return result/arry.length;
})

export const Factorial = (a: number) =>
    createParamDecorator((_data: unknown,_ctx: ExecutionContext) => {
        let result =1;
        for(let i=1;i<=a;i++){
            result *=i;
        }
        return result;
})

export const Max = (arry: number[]) =>
    createParamDecorator((_data: unknown,_ctx: ExecutionContext) => {
        let result = Number.MIN_SAFE_INTEGER;
        for(let i=1;i<=arry.length;i++){
            if(result<arry[i]){
                result=arry[i]
            }
        }
        return result;
})

export const Min = (arry: number[]) =>
    createParamDecorator((_data: unknown,_ctx: ExecutionContext) => {
        let result = Number.MAX_SAFE_INTEGER;
        for(let i=1;i<=arry.length;i++){
            if(result>arry[i]){
                result=arry[i]
            }
        }
        return result;
})

export const SumOfDigits = (num: number) =>
    createParamDecorator((_data: unknown,_ctx: ExecutionContext) => {
        let sumDigits = 0;
        while (num > 0) {
            sumDigits += num % 10;
            num = (num / 10) | 0; 
        }
        return sumDigits;
})

