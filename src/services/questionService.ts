import { create } from "../repositories/questionRepository";
import { IQuestion } from "../types/questionTypes";
import { findQuestions } from "../repositories/questionRepository";
export async function createQuestion(askedBy:string, question:string){
    const obj:IQuestion ={
        askedBy,
        question
    }
    await create(obj)
}
export async function getQuestions(){
    const questions = await findQuestions()
    const obj = {
        questions:questions
    }
    return obj;
}

