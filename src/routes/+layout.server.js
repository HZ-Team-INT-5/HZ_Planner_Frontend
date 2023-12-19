// @ts-expect-error any
export const load = async ({ locals: { getSession } }) => {
    return {
      session: await getSession(),
    }
  }