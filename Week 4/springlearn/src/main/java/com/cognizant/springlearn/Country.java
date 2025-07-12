package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {

    private static final Logger LOGGER = LoggerFactory.getLogger(Country.class);

    private String code;
    private String name;

    // Empty constructor
    public Country() {
        LOGGER.debug("Inside Country Constructor.");
    }

    // Getter for code
    public String getCode() {
        LOGGER.debug("Getting code: {}", code);
        return code;
    }

    // Setter for code
    public void setCode(String code) {
        LOGGER.debug("Setting code: {}", code);
        this.code = code;
    }

    // Getter for name
    public String getName() {
        LOGGER.debug("Getting name: {}", name);
        return name;
    }

    // Setter for name
    public void setName(String name) {
        LOGGER.debug("Setting name: {}", name);
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}
