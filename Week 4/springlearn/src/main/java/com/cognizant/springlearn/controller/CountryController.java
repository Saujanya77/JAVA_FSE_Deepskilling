package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.service.CountryService;

@RestController
public class CountryController {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        LOGGER.debug("Start getCountry() with code: {}", code);
        Country country = countryService.getCountry(code);
        LOGGER.debug("End getCountry()");
        return country;
    }
}
