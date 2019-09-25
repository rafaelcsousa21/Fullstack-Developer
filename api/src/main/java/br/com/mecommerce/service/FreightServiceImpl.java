package br.com.mecommerce.service;

import br.com.mecommerce.model.Freight;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class FreightServiceImpl implements FreightService{
    @Override
    public Freight processTax(Integer totalItems) {
        Freight freight = new Freight();
        freight.setTotalItens(totalItems);
        BigDecimal taxValue = BigDecimal.valueOf((int) (Math.random() * 6)+5);
        freight.setTaxValue(taxValue);
        freight.setTotalFreight(taxValue.multiply(BigDecimal.valueOf(freight.getTotalItens())));
        return freight;
    }
}
