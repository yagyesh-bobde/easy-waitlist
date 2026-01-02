import { publicProcedure, router } from "../index";

import { templatesRouter } from "./templates";

export const appRouter = router({
  healthCheck: publicProcedure.query(() => {
    return "OK";
  }),
  templates: templatesRouter,
});
export type AppRouter = typeof appRouter;
