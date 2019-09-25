package br.com.mecommerce.controller;


import br.com.mecommerce.entity.Order;
import br.com.mecommerce.repository.OrderRespository;
import br.com.mecommerce.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderRespository orderRespository;

    @Autowired
    private OrderService orderService;


    @GetMapping(name = "/", produces = "application/json")
    public Page<Order> getOrders(Pageable pageable) {
        return orderRespository.findAll(pageable);
    }

    @PostMapping(name = "/", produces = "application/json",consumes =  "application/json")
    public Order saveOrder(@RequestBody Order order) {
        return orderService.saveOrder(order);
    }
}
