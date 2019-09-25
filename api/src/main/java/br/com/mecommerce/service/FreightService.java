package br.com.mecommerce.service;

import br.com.mecommerce.model.Freight;

import java.math.BigDecimal;


public interface FreightService {

    public Freight processTax(Integer totalItems);
}
