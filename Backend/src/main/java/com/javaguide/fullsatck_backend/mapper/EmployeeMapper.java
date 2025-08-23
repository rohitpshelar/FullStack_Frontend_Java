package com.javaguide.fullsatck_backend.mapper;

import com.javaguide.fullsatck_backend.dto.EmployeeDto;
import com.javaguide.fullsatck_backend.entity.Employee;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface EmployeeMapper {

    EmployeeMapper INSTANCE = Mappers.getMapper( EmployeeMapper.class );

//    @Mapping(target = "id", ignore = true)
    EmployeeDto toDto(Employee employee);


//    @Mapping(target = "id", ignore = true)
    Employee toEntity(EmployeeDto employeeDto);
    List<EmployeeDto> toListDto(List<Employee> employee);
    List<Employee> toListEntity(List<EmployeeDto> employeeDto);
}
