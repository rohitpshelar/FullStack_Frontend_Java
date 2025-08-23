package com.javaguide.fullsatck_backend.service;

import com.javaguide.fullsatck_backend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);

    List<EmployeeDto> getAll();

    EmployeeDto getById(Long id);

    EmployeeDto update(Long id, EmployeeDto employeeDto);

    void delete(Long id);
}
