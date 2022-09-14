package com.devsuperior.dsmeta.services;


import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

//Classe-Componente responsável pelas operações de negócio.
@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	//Buscar as vendas
	public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {
		
		LocalDate today = LocalDate.now(ZoneId.systemDefault()); //Pegando a data atual do sistema.
		
		LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate); //Converte o valor da data de String para o formato LocalDate
		LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate); //Converte o valor da data de String para o formato LocalDate
		
		return repository.findSales(min, max, pageable);
	}

}
