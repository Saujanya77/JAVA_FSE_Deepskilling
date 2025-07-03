package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class App {
    public static void main(String[] args) {
        // Load the Spring context from XML configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get the BookService bean from the context
        BookService bookService = (BookService) context.getBean("bookService");

        // Call method to add book
        bookService.addBook();

        // Close the context (good practice)
        ((ClassPathXmlApplicationContext) context).close();
    }
}