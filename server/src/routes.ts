import {getAllJobsAction} from "./controller/getAllJobsAction"
import {deleteAllJobsAction} from "./controller/deleteAllJobsAction"

export const AppRoutes = [
    {
        path: "/jobs",
        method: "get",
        action: getAllJobsAction
    },
    {
        path: "/jobs",
        method: "delete",
        action: deleteAllJobsAction
    },
];