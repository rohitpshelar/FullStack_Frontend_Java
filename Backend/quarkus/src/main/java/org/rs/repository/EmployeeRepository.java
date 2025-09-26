package org.rs.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.rs.entity.Employee;

@ApplicationScoped
public class EmployeeRepository implements PanacheRepository<Employee> {
}
