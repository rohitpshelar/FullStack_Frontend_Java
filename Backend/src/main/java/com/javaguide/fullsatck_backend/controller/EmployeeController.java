package com.javaguide.fullsatck_backend.controller;

import com.javaguide.fullsatck_backend.dto.EmployeeDto;
import com.javaguide.fullsatck_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employee")
@AllArgsConstructor
public class EmployeeController {

    private EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getList(){
        return ResponseEntity.ok(employeeService.getAll());
    }


    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        System.out.println(employeeDto);
        return new ResponseEntity<>(employeeService.createEmployee(employeeDto), HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto>  findById(@PathVariable Long id){
        return ResponseEntity.ok(employeeService.getById(id));
    }

    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> update(@PathVariable Long id,@RequestBody  EmployeeDto employeeDto ){
        return ResponseEntity.ok(employeeService.update(id, employeeDto));
    }

    @DeleteMapping
    public ResponseEntity<String> delete(@RequestParam Long id){
        employeeService.delete(id);
       return ResponseEntity.ok( "Deleted");
    }

}
