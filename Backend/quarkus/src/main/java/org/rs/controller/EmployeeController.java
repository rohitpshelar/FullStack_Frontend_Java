package org.rs.controller;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.rs.dto.EmployeeDto;
import org.rs.service.EmployeeService;

@Path("/api/employee")
public class EmployeeController {

    @Inject
    EmployeeService employeeService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getList() {
        return Response.ok(employeeService.getAll()).build();
    }


    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public Response createEmployee(EmployeeDto employeeDto) {
        System.out.println(employeeDto);
        return Response.ok(employeeService.createEmployee(employeeDto)).build();
    }

    @GET
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public Response findById(@PathParam("id") Long id) {
        return Response.ok(employeeService.getById(id)).build();
    }

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public Response update(@PathParam("id") Long id, EmployeeDto employeeDto) {
        return Response.ok(employeeService.update(id, employeeDto)).build();
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    public Response delete(@PathParam("id") Long id) {
        employeeService.delete(id);
        return Response.ok("Deleted").build();
    }

}
