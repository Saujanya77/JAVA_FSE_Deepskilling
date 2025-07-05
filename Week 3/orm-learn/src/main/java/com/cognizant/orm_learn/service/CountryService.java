package com.cognizant.orm_learn.service;

import java.util.List;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    @Transactional
    public Country getCountryByCode(String code) {
        return countryRepository.findById(code).orElse(null);
    }

    @Transactional
    public Country addCountry(Country country) {
        if (countryRepository.existsById(country.getCode())) {
            throw new RuntimeException("Country with code " + country.getCode() + " already exists.");
        }
        return countryRepository.save(country);
    }

    @Transactional
    public Country updateCountry(Country country) {
        if (!countryRepository.existsById(country.getCode())) {
            throw new RuntimeException("Country with code " + country.getCode() + " does not exist.");
        }
        return countryRepository.save(country);
    }

    @Transactional
    public void deleteCountry(String code) {
        if (!countryRepository.existsById(code)) {
            throw new RuntimeException("Country with code " + code + " does not exist.");
        }
        countryRepository.deleteById(code);
    }

    @Transactional
    public List<Country> findCountriesByPartialName(String partialName) {
        return countryRepository.findByNameContainingIgnoreCase(partialName);
    }
}