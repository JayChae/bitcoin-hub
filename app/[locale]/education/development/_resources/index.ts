import { EducationDevResources, LocaleType } from "@/types";

import { booksEn, booksKo } from "./books";
import { certificationsEn, certificationsKo } from "./certifications";
import { classesCoursesEn, classesCoursesKo } from "./classes-courses";
import { guidesTutorialsEn, guidesTutorialsKo } from "./guides-tutorials";
import { miningEn, miningKo } from "./mining";
import { notesDocsEn, notesDocsKo } from "./notes-docs";
import { trainingProgramsEn, trainingProgramsKo } from "./training-programs";

export const educationDevResources: {
  [key in LocaleType]: EducationDevResources;
} = {
  en: {
    "guides-tutorials": guidesTutorialsEn,
    "notes-docs": notesDocsEn,
    books: booksEn,
    "classes-courses": classesCoursesEn,
    "training-programs": trainingProgramsEn,
    certifications: certificationsEn,
    mining: miningEn,
  },
  ko: {
    "guides-tutorials": guidesTutorialsKo,
    "notes-docs": notesDocsKo,
    books: booksKo,
    "classes-courses": classesCoursesKo,
    "training-programs": trainingProgramsKo,
    certifications: certificationsKo,
    mining: miningKo,
  },
};
