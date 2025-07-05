package com.library.LibraryManagementSpring.repository;

import com.library.LibraryManagementSpring.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
