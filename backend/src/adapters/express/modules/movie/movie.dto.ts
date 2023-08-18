import zod from 'zod';

import { movieTypes } from '../../../../domain/movie/types';

export const movieFiltersDto = zod.object({
    title: zod.string().min(1),
    type: zod.enum(movieTypes).optional(),
    year: zod.string().regex(/d{4}/).optional(),
})

export type MovieFilters = ReturnType<typeof movieFiltersDto.parse>;