package org.springframework.samples.petclinic.rest;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.model.Offer;
import org.springframework.samples.petclinic.model.Owner;
import org.springframework.samples.petclinic.service.OfferServiceImpl;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("api/offer")
public class OfferRestController {
	
	@Autowired
	OfferServiceImpl offerSeImpl;
	

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<Collection<Offer>> getOffersList() {
		List<Offer> offers = this.offerSeImpl.findAll();
		if (offers.isEmpty()) {
			return new ResponseEntity<Collection<Offer>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Collection<Offer>>(offers, HttpStatus.OK);
	}
	
	@RequestMapping( method = RequestMethod.POST)
	public ResponseEntity<Offer> addOffer(@RequestBody @Valid Offer offer, BindingResult bindingResult) {
		BindingErrorsResponse errors = new BindingErrorsResponse();
		HttpHeaders headers = new HttpHeaders();
		if (bindingResult.hasErrors() || (offer == null)) {
			errors.addAllErrors(bindingResult);
			headers.add("errors", errors.toJSON());
			return new ResponseEntity<Offer>(headers, HttpStatus.BAD_REQUEST);
		}
		this.offerSeImpl.save(offer);
		return new ResponseEntity<Offer>(offer, HttpStatus.CREATED);
	}

}


