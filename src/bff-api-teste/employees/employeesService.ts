import { getRequest } from "../baseAPI";
import { Employee, employeesSchema } from "../schemas/employees";

export async function fetchEmployees(): Promise<Employee[]> {
  const data = await getRequest<any>("/employees");
  return employeesSchema.parse(data);
}
