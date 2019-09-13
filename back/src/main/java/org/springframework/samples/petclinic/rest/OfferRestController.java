package org.springframework.samples.petclinic.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.service.OfferServiceImpl;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/offer")
public class OfferRestController {
	
	@Autowired
	OfferServiceImpl offerSeImpl;
	
	

}
