package com.jpmorgan.codeforgood.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class TestHelloWorld {

    @GetMapping("/")
    public String helloWorld() {
        return "Hello, World!";
    }
}
