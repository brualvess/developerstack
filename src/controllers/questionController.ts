import { Request, Response } from 'express';
import {
  createQuestion as create,
  getQuestions
} from '../services/questionService';
import { createAnswer as answerService } from '../services/answerService';

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question } = req.body
  await create(askedBy, question)
  res.sendStatus(201)
}

export async function createAnswer(req: Request, res: Response) {
  const id = Number(req.params.id)
  const { answeredBy, answer } = req.body
  await answerService(id, answeredBy, answer)
  res.sendStatus(200)
}

export async function get(req: Request, res: Response) {
  const result = await getQuestions()
  res.status(200).send(result)
}

export async function getById(req: Request, res: Response) {
  // TODO
}
