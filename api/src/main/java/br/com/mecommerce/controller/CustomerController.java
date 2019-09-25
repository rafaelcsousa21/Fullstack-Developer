package br.com.mecommerce.controller;

import br.com.mecommerce.entity.Customer;
import br.com.mecommerce.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping(name = "/", produces = "application/json")
    public Page<Customer> getCustomer(Pageable pageable) {
        return customerRepository.findAll(pageable);
    }

    @GetMapping(name = "/", produces = "application/json",params = {"name"})
    public Page<Customer> getCustomerByName(Pageable pageable, @RequestParam() String name) {
        return customerRepository.findByNameContainingIgnoreCase(pageable,name);
    }

}
