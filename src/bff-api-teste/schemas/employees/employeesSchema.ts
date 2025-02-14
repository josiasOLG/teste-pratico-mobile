import { z } from "zod";

export const employeeSchema = z.object({
  id: z.string().transform((val) => Number(val)),
  name: z.string(),
  job: z.string(),
  admission_date: z.string(),
  phone: z.string(),
  image: z.string().url(),
});

export const employeesSchema = z.array(employeeSchema);

export type Employee = z.infer<typeof employeeSchema>;
