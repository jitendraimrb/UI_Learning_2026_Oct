package com.practice.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.practice.demo.dto.Employee;

@RestController
@RequestMapping("/api/call")
public class CallController {

	@GetMapping("/react")
	public List<Employee> getEmployees() {
		return List.of(new Employee(1L, "Rahul", "IT", 85000), new Employee(2L, "Amit", "HR", 65000),
				new Employee(3L, "Neha", "Finance", 78000), new Employee(4L, "Pooja", "Admin", 55000),
				new Employee(5L, "Vikas", "IT", 92000));
	}
}