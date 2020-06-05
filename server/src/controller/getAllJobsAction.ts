import { Request, Response } from "express"
import { getManager } from "typeorm"
import { Job } from "../db/entity"

export const getAllJobsAction = async (request: Request, response: Response) => {

    const jobRepository = getManager().getRepository(Job)

    const jobs = await jobRepository.find()

    response.send(jobs);
}