import { prisma } from '../config/database';
import { IQuestion } from "../types/questionTypes";
export async function create(datas:IQuestion){
    const result = await prisma.questions.create({data:datas})
    return result;
}
export async function findQuestions(){
    const result = await prisma.questions.findMany()
    return result;
}