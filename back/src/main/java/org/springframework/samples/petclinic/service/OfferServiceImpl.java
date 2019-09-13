package org.springframework.samples.petclinic.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.model.Offer;
import org.springframework.samples.petclinic.repository.OfferRepository;

public class OfferServiceImpl implements OfferService{

	@Autowired
	OfferRepository offerRepository;

	@Override
	public List<Offer> findAll() {
		return offerRepository.findAll();
	}

	@Override
	public Offer findOne(int id) {
		return offerRepository.findOne(id);
	}

	@Override
	public Offer save(Offer offer) {
		return offerRepository.saveAndFlush(offer);
	}

	@Override
	public void delete(int id) {
		offerRepository.delete(id);
	}

	@Override
	public List<Offer> findByExpireDateAfter(Date date) {
		return offerRepository.findByExpireDateAfter(date);
	}
	

}
