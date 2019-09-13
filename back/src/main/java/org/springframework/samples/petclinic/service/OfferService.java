package org.springframework.samples.petclinic.service;

import java.util.List;

import org.springframework.samples.petclinic.model.Offer;

public interface OfferService{

	public List <Offer> findAll();
	public Offer findOne(int id);
	public void delete(Offer offer);
	public Offer save(Offer offer);
	
}
