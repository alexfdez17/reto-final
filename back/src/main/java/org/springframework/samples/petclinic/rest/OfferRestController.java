package org.springframework.samples.petclinic.rest;

import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.model.Offer;
import org.springframework.samples.petclinic.service.OfferServiceImpl;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/offer")
public class OfferRestController {
	
	@Autowired
	OfferServiceImpl offerSeImpl;
	
	@RequestMapping(value = "/notexpired", method = RequestMethod.GET)
	public ResponseEntity<List<Offer>> getOffersNotExpired() {
		List<Offer> offers = this.offerSeImpl.findByExpireDateAfter(new Date());
		if (offers.isEmpty()) {
			return new ResponseEntity<List<Offer>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Offer>>(offers, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Offer> deleteAOffer(@PathVariable(value = "id") int id) {
		this.offerSeImpl.delete(id);
		return new ResponseEntity<Offer>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Offer> updateOffer(@RequestBody @Valid Offer offer, @PathVariable(value = "id") int id) {
		if (offer.getId() != id) {
			return new ResponseEntity<Offer>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Offer>(offerSeImpl.save(offer), HttpStatus.OK);
	}
	

}
