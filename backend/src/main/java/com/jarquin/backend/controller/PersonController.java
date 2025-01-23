package com.jarquin.backend.controller;

import com.jarquin.backend.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.jarquin.backend.entity.Person;
import com.jarquin.backend.config.ResponseHandler;

@RestController
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping("/person/{id}")
    public ResponseEntity<Object> getById(@PathVariable(value = "id") Integer id) {
        if (personService.find(id).isPresent()) {
            return ResponseHandler.generateResponse(HttpStatus.OK,personService.find(id));
        }
        return ResponseHandler.generateResponse(HttpStatus.NOT_FOUND,null);
    }

    @GetMapping(value = "/person")
    @ResponseBody
    public ResponseEntity<Object> getAll() {
        return ResponseHandler.generateResponse(HttpStatus.OK,personService.findAll());
    }

    @PostMapping("/person")
    public ResponseEntity<Object> save(@RequestBody Person newPerson) {
        return ResponseHandler.generateResponse(HttpStatus.CREATED,personService.save(newPerson));
    }

    @PutMapping("/person")
    public ResponseEntity<Object> update(@RequestBody Person updatedPerson) {
        if (personService.find(updatedPerson.getId()).isPresent()) {
            return ResponseHandler.generateResponse(HttpStatus.OK,personService.save(updatedPerson));
        }
        return ResponseHandler.generateResponse(HttpStatus.NOT_FOUND,null);
    }

    @DeleteMapping("/person/{id}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "id") Integer id) {
        if (personService.find(id).isPresent()) {
            personService.delete(id);
            return ResponseHandler.generateResponse(HttpStatus.OK,null);
        }
        return ResponseHandler.generateResponse(HttpStatus.NOT_FOUND,null);

    }

}
