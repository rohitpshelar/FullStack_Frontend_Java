package org.rs.service.impl;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.rs.dto.EmployeeDto;
import org.rs.mapper.EmployeeMapper;
import org.rs.repository.EmployeeRepository;
import org.rs.service.EmployeeService;

import java.util.List;

@ApplicationScoped
public class EmployeeServiceImpl implements EmployeeService {

    @Inject
    EmployeeRepository employeeRepository;
    @Inject
    EmployeeMapper employeeMapper;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        var employee = employeeMapper.toEntity(employeeDto);
        employeeRepository.persist(employee);
        return employeeMapper.toDto(employee);
    }

    @Override
    public List<EmployeeDto> getAll() {
        return employeeMapper.toListDto(employeeRepository.listAll());
    }

    @Override
    public EmployeeDto getById(Long id) {
        return employeeMapper.toDto(employeeRepository.findById(id));
    }

    @Override
    public EmployeeDto update(Long id, EmployeeDto employeeDto) {

        var employee = employeeRepository.findById(id);
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        return employeeMapper.toDto(employee);
    }

    @Override
    public void delete(Long id) {
        employeeRepository.deleteById(id);
    }
}
