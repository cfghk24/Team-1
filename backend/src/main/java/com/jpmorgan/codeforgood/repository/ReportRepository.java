package com.jpmorgan.codeforgood.repository;

import com.jpmorgan.codeforgood.entity.Place;
import com.jpmorgan.codeforgood.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Report, Long> {
}
