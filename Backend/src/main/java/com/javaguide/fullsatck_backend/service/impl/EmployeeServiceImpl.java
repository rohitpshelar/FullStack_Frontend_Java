package com.javaguide.fullsatck_backend.service.impl;

import com.javaguide.fullsatck_backend.dto.EmployeeDto;
import com.javaguide.fullsatck_backend.mapper.EmployeeMapper;
import com.javaguide.fullsatck_backend.repository.EmployeeRespository;
import com.javaguide.fullsatck_backend.service.EmployeeService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springdoc.api.OpenApiResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRespository employeeRespository;

    @Override
//    @Transactional
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        var employee = EmployeeMapper.INSTANCE.toEntity(employeeDto);
        var e2 = employeeRespository.save(employee );
        return EmployeeMapper.INSTANCE.toDto(e2);
    }

    @Override
    public List<EmployeeDto> getAll() {
        return EmployeeMapper.INSTANCE.toListDto(employeeRespository.findAll());
    }

    @Override
    public EmployeeDto getById(Long id) {
        return EmployeeMapper.INSTANCE.toDto(employeeRespository.findById(id).orElseThrow(()->
                new OpenApiResourceNotFoundException("Employee don't exist with given Id : " + id)));
    }

    @Override
    public EmployeeDto update(Long id, EmployeeDto employeeDto) {

        var employee  = employeeRespository.findById(id).orElseThrow(()->
                new OpenApiResourceNotFoundException("Employee don't exist with given Id : " + id));
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        employeeRespository.save(employee);
        return EmployeeMapper.INSTANCE.toDto(employee);
    }

    @Override
    public void delete(Long id) {
        employeeRespository.deleteById(id);
    }
}
