import { create } from "../repositories/answerRepository";
import { IAnserw } from "../types/answerTypes";
export async function createAnswer(id:number,answeredBy:string,answer:string){
const obj:IAnserw ={
    answeredBy: answeredBy,
    answer: answer,
    questionId: id
}
await create(obj);
}
