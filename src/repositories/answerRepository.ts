import { prisma } from '../config/database';
import { IAnserw } from '../types/answerTypes';
export async function create(datas:IAnserw){
    const result = await prisma.answers.create({data:datas})
    return result
}