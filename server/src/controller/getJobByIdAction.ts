import { Request, Response } from "express"
import { getManager } from "typeorm"
import { Job } from "../db/entity"

export const getJobByIdAction = async (request: Request, response: Response) => {
    const { id } = request.params
    const jobRepository = getManager().getRepository(Job)

    const job = await jobRepository.findOne(id)

    response.send(job);
}