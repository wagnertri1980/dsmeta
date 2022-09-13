package com.devsuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

//Classe-Componente responsável pelas operações de negócio.
@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	//Buscar as vendas
	public List<Sale> findSales() {
		return repository.findAll();
	}

}
