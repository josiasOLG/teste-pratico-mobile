import { fetchEmployees } from "@/bff-api-teste";
import { Employee } from "@/bff-api-teste/schemas";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface EmployeesState {
  data: Employee[];
  loading: boolean;
  error: string | null;
}

const initialState: EmployeesState = {
  data: [],
  loading: false,
  error: null,
};

export const getEmployees = createAsyncThunk(
  "employees/getEmployees",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchEmployees();
    } catch (error: any) {
      return rejectWithValue(error.message || "Erro ao buscar employees");
    }
  }
);

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getEmployees.fulfilled,
        (state, action: PayloadAction<Employee[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(getEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default employeesSlice.reducer;
