import {getAllJobsAction} from "./controller/getAllJobsAction"
import {getJobByIdAction} from "./controller/getJobByIdAction"
import {deleteAllJobsAction} from "./controller/deleteAllJobsAction"
import {deleteJobByIdAction} from "./controller/deleteJobByIdAction"

export const AppRoutes = [
    {
        path: "/jobs",
        method: "get",
        action: getAllJobsAction
    },
    {
      path: "/jobs",
      params: ['id'],
      method: "get",
      action: getJobByIdAction
    },
    {
        path: "/jobs",
        method: "delete",
        action: deleteAllJobsAction
    },
    {
      path: "/jobs",
      method: "delete",
      params: ['id'],
      action: deleteJobByIdAction
  },
];