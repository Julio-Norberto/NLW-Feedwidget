import express from 'express'
import { NodeMailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repositories';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodeMailerMailAdapter = new NodeMailerMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodeMailerMailAdapter
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })

    return res.status(201).send()
})