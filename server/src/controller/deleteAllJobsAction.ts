import { Request, Response } from "express"
import { getManager } from "typeorm"
import { Job } from "../db/entity"

export const deleteAllJobsAction = async (request: Request, response: Response) => {

    const jobRepository = getManager().getRepository(Job)

    await jobRepository.clear()

    response.send(true);
}