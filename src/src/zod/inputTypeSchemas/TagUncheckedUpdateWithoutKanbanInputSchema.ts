import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MdxNoteUncheckedUpdateManyWithoutTagsNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutTagsNestedInputSchema';
import { BibEntryUncheckedUpdateManyWithoutTagsNestedInputSchema } from './BibEntryUncheckedUpdateManyWithoutTagsNestedInputSchema';
import { IpynbUncheckedUpdateManyWithoutTagsNestedInputSchema } from './IpynbUncheckedUpdateManyWithoutTagsNestedInputSchema';
import { QAPairUncheckedUpdateManyWithoutTagsNestedInputSchema } from './QAPairUncheckedUpdateManyWithoutTagsNestedInputSchema';
import { PracticeExamUncheckedUpdateManyWithoutTagsNestedInputSchema } from './PracticeExamUncheckedUpdateManyWithoutTagsNestedInputSchema';
import { EquationUncheckedUpdateManyWithoutTagsNestedInputSchema } from './EquationUncheckedUpdateManyWithoutTagsNestedInputSchema';
import { ToDoUncheckedUpdateManyWithoutTagsNestedInputSchema } from './ToDoUncheckedUpdateManyWithoutTagsNestedInputSchema';
import { ToDoListUncheckedUpdateManyWithoutTagsNestedInputSchema } from './ToDoListUncheckedUpdateManyWithoutTagsNestedInputSchema';

export const TagUncheckedUpdateWithoutKanbanInputSchema: z.ZodType<Prisma.TagUncheckedUpdateWithoutKanbanInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  MdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedUpdateManyWithoutTagsNestedInputSchema).optional()
}).strict();

export default TagUncheckedUpdateWithoutKanbanInputSchema;
