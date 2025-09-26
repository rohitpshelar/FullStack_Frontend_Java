package com.javaguide.fullsatck_backend.repository;

import com.javaguide.fullsatck_backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
