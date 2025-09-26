package org.rs.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.rs.dto.EmployeeDto;
import org.rs.entity.Employee;

import java.util.List;

@Mapper(componentModel = "cdi", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface EmployeeMapper {

    EmployeeDto toDto(Employee employee);

    @Mapping(target = "id", ignore = true)
    Employee toEntity(EmployeeDto employeeDto);

    List<EmployeeDto> toListDto(List<Employee> employee);

    List<Employee> toListEntity(List<EmployeeDto> employeeDto);
}
