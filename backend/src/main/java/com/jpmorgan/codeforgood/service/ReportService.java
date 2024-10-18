package com.jpmorgan.codeforgood.service;


import com.jpmorgan.codeforgood.controller.request.ReportRequest;
import com.jpmorgan.codeforgood.controller.response.ReportResponse;
import com.jpmorgan.codeforgood.entity.Report;
import com.jpmorgan.codeforgood.repository.PlaceRepository;
import com.jpmorgan.codeforgood.repository.ReportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReportService {
    private final ReportRepository reportRepository;

    public ReportResponse createReport(ReportRequest request) {
        Report report = Report.createReport(
                request.imgUrl(),
                request.location(),
                request.name(),
                request.phoneNumber(),
                request.email(),
                request.description(),
                request.pictureUrl()
                );
        reportRepository.save(report);
        return new ReportResponse(report.getId());
    }
}
