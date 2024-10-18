package com.jpmorgan.codeforgood.service;

import com.jpmorgan.codeforgood.controller.response.PlaceResponse;
import com.jpmorgan.codeforgood.entity.Category;
import com.jpmorgan.codeforgood.entity.Place;
import com.jpmorgan.codeforgood.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaceService {

    private final PlaceRepository placeRepository;

    public List<PlaceResponse> getAllPlaces(Category category) {
        List<Place> all = placeRepository.findAllByCategory(category);
        return PlaceResponse.from(all);
    }
}
