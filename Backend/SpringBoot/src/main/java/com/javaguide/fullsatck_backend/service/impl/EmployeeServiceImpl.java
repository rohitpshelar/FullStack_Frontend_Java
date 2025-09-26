package com.javaguide.fullsatck_backend.service.impl;

import com.javaguide.fullsatck_backend.dto.EmployeeDto;
import com.javaguide.fullsatck_backend.mapper.EmployeeMapper;
import com.javaguide.fullsatck_backend.repository.EmployeeRepository;
import com.javaguide.fullsatck_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springdoc.api.OpenApiResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        var employee = EmployeeMapper.INSTANCE.toEntity(employeeDto);
        var e2 = employeeRepository.save(employee);
        return EmployeeMapper.INSTANCE.toDto(e2);
    }

    @Override
    public List<EmployeeDto> getAll() {
        return EmployeeMapper.INSTANCE.toListDto(employeeRepository.findAll());
    }

    @Override
    public EmployeeDto getById(Long id) {
        return EmployeeMapper.INSTANCE.toDto(employeeRepository.findById(id).orElseThrow(() ->
                new OpenApiResourceNotFoundException("Employee don't exist with given Id : " + id)));
    }

    @Override
    public EmployeeDto update(Long id, EmployeeDto employeeDto) {

        var employee = employeeRepository.findById(id).orElseThrow(() ->
                new OpenApiResourceNotFoundException("Employee don't exist with given Id : " + id));
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        employeeRepository.save(employee);
        return EmployeeMapper.INSTANCE.toDto(employee);
    }

    @Override
    public void delete(Long id) {
        employeeRepository.deleteById(id);
    }
}
