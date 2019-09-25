package br.com.mecommerce.service;

import br.com.mecommerce.entity.Order;
import br.com.mecommerce.repository.OrderRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderRespository orderRespository;

    public Order saveOrder(Order order){
        order.getItems().forEach(orderItem -> orderItem.setOrder(order));
        orderRespository.save(order);
        return  order;
    }
}
