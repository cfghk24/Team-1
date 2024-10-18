package com.jpmorgan.codeforgood.service;

import com.jpmorgan.codeforgood.controller.response.PlaceResponse;
import com.jpmorgan.codeforgood.entity.Category;
import com.jpmorgan.codeforgood.entity.Place;
import com.jpmorgan.codeforgood.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class PlaceService {

    private final PlaceRepository placeRepository;

    public List<PlaceResponse> getAllPlaces(Category category) {
        if (category.equals(Category.ALL)) {
            List<Place> all = placeRepository.findAll();
            return PlaceResponse.from(all);
        }
        List<Place> placesByCategory = placeRepository.findAllByCategory(category);
        return PlaceResponse.from(placesByCategory);
    }
}
