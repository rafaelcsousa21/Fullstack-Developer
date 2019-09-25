package br.com.mecommerce.controller;

import br.com.mecommerce.entity.Product;
import br.com.mecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
public class ProdutoController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping(name = "/", produces = "application/json")
    public Page<Product> getProdutos(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @GetMapping(name = "/", produces = "application/json",params = {"nome"})
    public Page<Product> getClientesPorName(Pageable pageable, @RequestParam(name = "name") String name) {
        return productRepository.findByNameContainingIgnoreCase(pageable,name);
    }

}
