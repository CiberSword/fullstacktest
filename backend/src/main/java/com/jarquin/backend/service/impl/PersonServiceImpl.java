package com.jarquin.backend.service.impl;

import com.jarquin.backend.entity.Person;
import com.jarquin.backend.repository.PersonRepository;
import com.jarquin.backend.service.PersonService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonServiceImpl implements PersonService {

    private final PersonRepository personRepository;

    public PersonServiceImpl(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public Optional<Person> find(Integer id) {
        return personRepository.findById(id);
    }

    @Override
    public List<Person> findAll() {
        return personRepository.findAll();
    }

    @Override
    public Person save(Person newPerson) {
        return personRepository.save(newPerson);
    }

    @Override
    public void delete(Integer id) {
        personRepository.deleteById(id);
    }
}
