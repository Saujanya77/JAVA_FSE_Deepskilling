package com.example.employeeapp.service;

import com.example.employeeapp.dao.EmployeeDao;
import com.example.employeeapp.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeDao employeeDao;

  
    public List<Employee> getAllEmployees() {
        return employeeDao.getAllEmployees();
    }
}