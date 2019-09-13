package org.springframework.samples.petclinic.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * Simple JavaBean domain object representing an person.
 *
 * @author Ken Krebs
 */
@Entity
public class Offer extends BaseEntity {

    protected String title;

    protected double discount;
    
    @DateTimeFormat(pattern = "yyyy/MM/dd")
    @Column(name = "expire_date")
    protected Date expireDate;
    
    protected String description;

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public Date getExpireDate() {
		return expireDate;
	}

	public void setExpireDate(Date expireDate) {
		this.expireDate = expireDate;
	}
    


}
