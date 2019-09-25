package br.com.mecommerce.repository;

import br.com.mecommerce.entity.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    Page<Customer> findByNameContainingIgnoreCase(Pageable pageable, String nome);
}
