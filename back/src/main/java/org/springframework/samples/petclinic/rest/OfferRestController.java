package org.springframework.samples.petclinic.rest;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.model.Offer;
import org.springframework.samples.petclinic.service.OfferService;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/offer")
public class OfferRestController {
	
	@Autowired
	OfferService offerService;
	
	@RequestMapping(value = "/notexpired", method = RequestMethod.GET)
	public ResponseEntity<List<Offer>> getOffersNotExpired() {
		List<Offer> offers = this.offerService.findByExpireDateAfter(new Date());
		if (offers.isEmpty()) {
			return new ResponseEntity<List<Offer>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Offer>>(offers, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Offer> deleteAOffer(@PathVariable(value = "id") int id) {
		this.offerService.delete(id);
		return new ResponseEntity<Offer>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Offer> updateOffer(@RequestBody @Valid Offer offer, @PathVariable(value = "id") int id) {
		if (offer.getId() != id) {
			return new ResponseEntity<Offer>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Offer>(offerService.save(offer), HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<Collection<Offer>> getOffersList() {
		List<Offer> offers = this.offerService.findAll();
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
		this.offerService.save(offer);
		return new ResponseEntity<Offer>(offer, HttpStatus.CREATED);
	}

}


