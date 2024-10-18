package com.jpmorgan.codeforgood.service;


import com.jpmorgan.codeforgood.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReportService {
    private final PlaceRepository placeRepository;
}
