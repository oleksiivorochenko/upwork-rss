import { Request, Response } from "express"
import { getManager } from "typeorm"
import { Job } from "../db/entity"

export const deleteJobByIdAction = async (request: Request, response: Response) => {

    const { id } = request.params
    const jobRepository = getManager().getRepository(Job)

    await jobRepository.delete(id)

    response.send(true);
}