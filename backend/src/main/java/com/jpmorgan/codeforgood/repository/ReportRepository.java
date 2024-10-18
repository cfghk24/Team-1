package com.jpmorgan.codeforgood.repository;

import com.jpmorgan.codeforgood.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Place, Long> {
}
