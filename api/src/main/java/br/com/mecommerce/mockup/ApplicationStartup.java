package br.com.mecommerce.mockup;

import br.com.mecommerce.entity.Customer;
import br.com.mecommerce.entity.Product;
import br.com.mecommerce.repository.CustomerRepository;
import br.com.mecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class ApplicationStartup 
implements ApplicationListener<ApplicationReadyEvent> {

  @Autowired
  private ProductRepository productRepository;

  @Autowired
  private CustomerRepository customerRepository;


  /**
   * Popula o banco com dados inicais
   * @param event
   */
  @Override
  public void onApplicationEvent(final ApplicationReadyEvent event) {

    customerRepository.save(new Customer(1,"Rafael"));
    customerRepository.save(new Customer(2,"João"));
    customerRepository.save(new Customer(3,"Teste"));
    customerRepository.save(new Customer(4,"Marcelo Sousa Sousa Sousa"));
    customerRepository.save(new Customer(5,"Marcos marcos marcos"));
    customerRepository.save(new Customer(6,"Mauro mauro mauro"));
    customerRepository.save(new Customer(7,"Lucas"));

    productRepository.save(new Product(1,"Macbook de 12 Polegadas, 512 GB",new BigDecimal(5.12)));
    productRepository.save(new Product(2,"Smartphone Motorola Moto G7 Play",new BigDecimal(250)));
    productRepository.save(new Product(3,"Ar Condicionado Split 9000 Btu/s Samsung Digial Inverter",new BigDecimal(150)));
    productRepository.save(new Product(4,"Smartphone Motorola Moto G7 Play",new BigDecimal(8.12)));
    productRepository.save(new Product(5,"Macbook de 12 Polegadas, 512 GB",new BigDecimal(123.12)));
    // here your code ...

    return;
  }

}