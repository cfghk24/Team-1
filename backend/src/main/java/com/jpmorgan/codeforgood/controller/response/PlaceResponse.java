package com.jpmorgan.codeforgood.controller.response;

import com.jpmorgan.codeforgood.entity.Place;

import java.util.List;

public record PlaceResponse(
        Long id,
        String category,
        String name,
        String description,
        String url,
        String imgUrl,
        Double rating
        ) {

        public static List<PlaceResponse> from(List<Place> places) {
                return places.stream()
                        .map(place -> new PlaceResponse(
                                place.getId(),
                                place.getCategory().name(),
                                place.getName(),
                                place.getDescription(),
                                place.getUrl(),
                                place.getImgUrl(),
                                place.getRating()
                        ))
                        .toList();
        }

}
