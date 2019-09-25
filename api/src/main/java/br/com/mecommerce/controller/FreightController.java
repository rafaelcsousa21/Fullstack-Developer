package br.com.mecommerce.controller;

import br.com.mecommerce.model.Freight;
import br.com.mecommerce.service.FreightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/freight")
public class FreightController {

    @Autowired
    private FreightService freightService;

    @GetMapping(name = "/", produces = "application/json", params = {"totalItens"})
    public Freight proccessTax(@RequestParam("totalItens")  Integer totalItens ) {
        return freightService.processTax(totalItens);
    }
}
