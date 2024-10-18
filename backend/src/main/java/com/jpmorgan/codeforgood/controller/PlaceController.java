package com.jpmorgan.codeforgood.controller;

import com.jpmorgan.codeforgood.controller.response.PlaceResponse;
import com.jpmorgan.codeforgood.entity.Category;
import com.jpmorgan.codeforgood.entity.Place;
import com.jpmorgan.codeforgood.service.PlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/places")
public class PlaceController {

    private final PlaceService placeService;

    @GetMapping("")
    public ResponseEntity<List<PlaceResponse>> getAllPlaces(@RequestParam Category category) {
        return ResponseEntity.ok(placeService.getAllPlaces(category));
    }

}
