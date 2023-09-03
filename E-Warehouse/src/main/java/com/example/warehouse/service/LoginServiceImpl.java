package com.example.warehouse.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.warehouse.model.Admin;
import com.example.warehouse.model.Customer;
import com.example.warehouse.repository.AdminRepository;
import com.example.warehouse.repository.CustomerRepository;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	AdminRepository adminRepository;

	@Autowired
	CustomerRepository customerRepository;

	@Override
	public String loginUserAuth(Map<String, String> authdata) {
		String username = authdata.get("username");
		String password = authdata.get("password");
		Admin admin = adminRepository.getReferenceByEmailAndPassword(username, password);
		Customer customer = customerRepository.getReferenceByEmailAndPassword(username, password);
		if (admin != null || customer != null) {
			return "login success";
		} else {
			return "*Invalid Credentials";
		}

	}
}
