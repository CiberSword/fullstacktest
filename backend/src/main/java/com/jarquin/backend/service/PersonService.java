package com.jarquin.backend.service;

import com.jarquin.backend.entity.Person;
import java.util.List;
import java.util.Optional;

public interface PersonService {

    Optional<Person> find(Integer id);
    List<Person> findAll();
    Person save(Person newPerson);
    void delete(Integer id);

}
