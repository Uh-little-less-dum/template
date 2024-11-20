import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteUncheckedCreateNestedManyWithoutTagsInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutTagsInputSchema';
import { BibEntryUncheckedCreateNestedManyWithoutTagsInputSchema } from './BibEntryUncheckedCreateNestedManyWithoutTagsInputSchema';
import { IpynbUncheckedCreateNestedManyWithoutTagsInputSchema } from './IpynbUncheckedCreateNestedManyWithoutTagsInputSchema';
import { PracticeExamUncheckedCreateNestedManyWithoutTagsInputSchema } from './PracticeExamUncheckedCreateNestedManyWithoutTagsInputSchema';
import { EquationUncheckedCreateNestedManyWithoutTagsInputSchema } from './EquationUncheckedCreateNestedManyWithoutTagsInputSchema';
import { ToDoUncheckedCreateNestedManyWithoutTagsInputSchema } from './ToDoUncheckedCreateNestedManyWithoutTagsInputSchema';
import { ToDoListUncheckedCreateNestedManyWithoutTagsInputSchema } from './ToDoListUncheckedCreateNestedManyWithoutTagsInputSchema';

export const TagUncheckedCreateWithoutQAPairInputSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutQAPairInput> = z.object({
  value: z.string(),
  kanbanId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();

export default TagUncheckedCreateWithoutQAPairInputSchema;
