import { type inferAsyncReturnType } from '@trpc/server';
import { type CreateNextContextOptions } from '@trpc/server/adapters/next';


/**
 * Defines your inner context shape.
 * Add fields here that the inner context brings.
 */
type CreateInnerContextOptions = Record<string, never>;


/**
 * Inner context. Will always be available in your procedures, in contrast to the outer context.
 *
 * Also useful for:
 * - testing, so you don't have to mock Next.js' `req`/`res`
 * - tRPC's `createServerSideHelpers` where we don't have `req`/`res`
 *
 * @see https://trpc.io/docs/context#inner-and-outer-context
 */
export const createContextInner = async (opts: CreateInnerContextOptions) => {
  return {
  };
}

// Outer context. Used in the routers and will e.g. bring `req` & `res` to the context as "not `undefined`".
export const createContext = async(opts: CreateNextContextOptions) => {
  const { res, req } = opts
  return {
    res,
    req,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>

// The usage in your router is the same as the example above.