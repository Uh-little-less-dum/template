import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadingListIncludeSchema } from '../inputTypeSchemas/ReadingListIncludeSchema'
import { ReadingListCreateInputSchema } from '../inputTypeSchemas/ReadingListCreateInputSchema'
import { ReadingListUncheckedCreateInputSchema } from '../inputTypeSchemas/ReadingListUncheckedCreateInputSchema'
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema"
import { MdxNoteFindManyArgsSchema } from "../outputTypeSchemas/MdxNoteFindManyArgsSchema"
import { IpynbFindManyArgsSchema } from "../outputTypeSchemas/IpynbFindManyArgsSchema"
import { ReadingListCountOutputTypeArgsSchema } from "../outputTypeSchemas/ReadingListCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReadingListSelectSchema: z.ZodType<Prisma.ReadingListSelect> = z.object({
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastUpdate: z.boolean().optional(),
  bibEntries: z.union([z.boolean(),z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  mdxNotes: z.union([z.boolean(),z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  ipynbNotes: z.union([z.boolean(),z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ReadingListCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ReadingListCreateArgsSchema: z.ZodType<Prisma.ReadingListCreateArgs> = z.object({
  select: ReadingListSelectSchema.optional(),
  include: ReadingListIncludeSchema.optional(),
  data: z.union([ ReadingListCreateInputSchema,ReadingListUncheckedCreateInputSchema ]),
}).strict() ;

export default ReadingListCreateArgsSchema;
