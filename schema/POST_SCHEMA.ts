import { z } from 'zod'

const POST_ATTRIBUTE_SCHEMA = z.object({
  Title: z.string(),
  Content: z.string(),
})

export const POST_DATA_SCHEMA = z.object({
  id: z.string(),
  attributes: POST_ATTRIBUTE_SCHEMA,
})

export const POST_SCHEMA = z.object({
  data: POST_DATA_SCHEMA,
})

export type POST_DATA_Type = z.infer<typeof POST_DATA_SCHEMA>
export type POST_Type = z.infer<typeof POST_SCHEMA>
