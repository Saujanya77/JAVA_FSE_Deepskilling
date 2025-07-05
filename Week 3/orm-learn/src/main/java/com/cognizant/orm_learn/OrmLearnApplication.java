package com.cognizant.orm_learn;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.service.CountryService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class OrmLearnApplication {

    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryService = context.getBean(CountryService.class);

        testGetCountryByCode();
        testAddCountry();
        testUpdateCountry();
        testDeleteCountry();
        testFindByPartialName();
    }

    private static void testGetCountryByCode() {
        System.out.println("=== Get Country by Code 'IN' ===");
        Country country = countryService.getCountryByCode("IN");
        System.out.println(country);
    }

    private static void testAddCountry() {
        System.out.println("=== Add Country 'XY' - 'Xylophone Land' ===");
        Country newCountry = new Country();
        newCountry.setCode("XY");
        newCountry.setName("Xylophone Land");
        try {
            countryService.addCountry(newCountry);
            System.out.println("Added: " + countryService.getCountryByCode("XY"));
        } catch (Exception e) {
            System.err.println("Error adding country: " + e.getMessage());
        }
    }

    private static void testUpdateCountry() {
        System.out.println("=== Update Country 'XY' name to 'Xylophone World' ===");
        Country updatedCountry = new Country();
        updatedCountry.setCode("XY");
        updatedCountry.setName("Xylophone World");
        try {
            countryService.updateCountry(updatedCountry);
            System.out.println("Updated: " + countryService.getCountryByCode("XY"));
        } catch (Exception e) {
            System.err.println("Error updating country: " + e.getMessage());
        }
    }

    private static void testDeleteCountry() {
        System.out.println("=== Delete Country with Code 'XY' ===");
        try {
            countryService.deleteCountry("XY");
            System.out.println("Deleted country 'XY'");
        } catch (Exception e) {
            System.err.println("Error deleting country: " + e.getMessage());
        }
    }

    private static void testFindByPartialName() {
        System.out.println("=== Find countries containing 'an' ===");
        List<Country> countries = countryService.findCountriesByPartialName("an");
        countries.forEach(System.out::println);
    }
}