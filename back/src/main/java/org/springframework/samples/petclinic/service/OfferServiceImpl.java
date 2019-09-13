package org.springframework.samples.petclinic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.repository.OfferRepository;

public class OfferServiceImpl implements OfferService{

	@Autowired
	OfferRepository offerRepository;

}
