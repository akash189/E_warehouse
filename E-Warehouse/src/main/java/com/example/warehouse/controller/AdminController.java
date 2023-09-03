package com.example.warehouse.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.warehouse.model.Admin;
import com.example.warehouse.model.Customer;
import com.example.warehouse.model.Product;
import com.example.warehouse.repository.AdminRepository;
import com.example.warehouse.repository.CustomerRepository;
import com.example.warehouse.repository.ProductRepository;
import com.example.warehouse.service.CustomerService;
import com.example.warehouse.service.ProductService;

@RestController
@RequestMapping("warehouse")
public class AdminController {

	@Autowired
	AdminRepository adminRepository;

	@Autowired
	CustomerRepository customerRepository;

	@Autowired
	ProductRepository productRepository;

	@Autowired
	CustomerService customerService;

	@Autowired
	ProductService productService;

	// For redirect to Admin Dashboard
	@GetMapping("/dashboard")
	public ModelAndView eadminDashboard() {
		return new ModelAndView("AdminDashboard.jsp");
	}

	// For redirect to profile page
	@PostMapping("/profile/admin/{id}")
	public Optional<Admin> profileData(@PathVariable("id") int id) {
		Optional<Admin> admin = adminRepository.findById(id);
		return admin;
	}

	@PostMapping("/profile/customer/{id}")
	public Customer profileDataCustomer(@PathVariable("id") int id) {
		return customerService.getCustomerProfile(id);
	}

	@PostMapping("/customer/add")
	public String addCustomer(@RequestBody Customer customer) {
		return customerService.addCustomer(customer);
	}

	@GetMapping("/customer/data")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Customer> customerDetails() {
		return customerService.getCustomerDetails();
	}

	@PostMapping("/customer/data/{id}")
	public Customer customerData(@PathVariable("id") int id) {
		return customerService.getCustomerData(id);
	}

	// For update customer details
	@PostMapping("customer/update")
	public String editCustomer(@RequestBody Customer customer) {
		return customerService.editCustomerData(customer);
	}

	@PostMapping("customer/delete/{id}")
	public String deleteCustomer(@PathVariable("id") int id) {
		return customerService.deleteCustomerData(id);
	}

	@PostMapping("/product/add")
	public String addProduct(@RequestBody Product product) {
		return productService.addProductDetails(product);
	}

	// For update product details
	@PostMapping("product/update")
	public String editProduct(@RequestBody Product product) {
		return productService.editProductDetails(product);
	}

	@PostMapping("product/delete/{id}")
	public String deleteProduct(@PathVariable("id") int id) {
		return productService.deleteProductDetails(id);
	}

	@PostMapping("/product/data")
	public List<Product> productDetails() {
		return productService.getProductDetails();
	}

	@PostMapping("/product/data/{id}")
	public Optional<Product> productData(@PathVariable("id") int id) {
		return productService.getProductData(id);
	}

	@PostMapping("/resetpass/{id}")
	public String resetPassA(@RequestBody Map<String, String> passMap, @PathVariable("id") int id) {
		return customerService.restCustomerPassword(passMap, id);
	}

	@PostMapping("/availablespace")
	public long availableSpace() {
		return productService.availableProductSpace();
	}
}
