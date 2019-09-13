package org.springframework.samples.petclinic.service;

import java.util.Date;
import java.util.List;

import org.springframework.samples.petclinic.model.Offer;

public interface OfferService{
	
	public List<Offer> findAll();
	public Offer findOne(int id);
	public void delete(int id);
	public Offer save(Offer offer);
	public List<Offer> findByExpireDateAfter(Date date);
	
}
