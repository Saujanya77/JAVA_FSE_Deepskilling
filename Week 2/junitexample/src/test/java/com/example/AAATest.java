package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAATest {

    private StringBuilder sharedBuilder;

    @Before
    public void setUp() {
        // Arrange: Setup code runs before each test
        sharedBuilder = new StringBuilder();
        System.out.println("Setup before test");
    }

    @After
    public void tearDown() {
        // Teardown: Runs after each test to cleanup
        sharedBuilder = null;
        System.out.println("Teardown after test");
    }

    @Test
    public void testAppend() {
        // Arrange
        String str = "Hello";

        // Act
        sharedBuilder.append(str);

        // Assert
        assertEquals("Hello", sharedBuilder.toString());
    }

    @Test
    public void testAppendWithSpace() {
        // Arrange
        String first = "Hello";
        String second = " World";

        // Act
        sharedBuilder.append(first);
        sharedBuilder.append(second);

        // Assert
        assertEquals("Hello World", sharedBuilder.toString());
    }
}