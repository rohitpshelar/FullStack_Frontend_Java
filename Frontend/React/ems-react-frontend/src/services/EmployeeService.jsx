import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employee';

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const addEmployee = (employeeDto) => axios.post(REST_API_BASE_URL, employeeDto);

export const findById = (employeeId) => axios.get(REST_API_BASE_URL+'/'+employeeId);

export const updateEmployee = (employeeId, employeeDto) => axios.put(REST_API_BASE_URL+'/'+employeeId, employeeDto);

export const removeEmployee = (employeeId) => axios.delete(REST_API_BASE_URL+'/'+employeeId);
