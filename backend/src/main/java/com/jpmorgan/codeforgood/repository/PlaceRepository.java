package com.jpmorgan.codeforgood.repository;

import com.jpmorgan.codeforgood.entity.Category;
import com.jpmorgan.codeforgood.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaceRepository extends JpaRepository<Place, Long> {
    List<Place> findAllByCategory(Category category);

    List<Place> findAllByCategory();
}
