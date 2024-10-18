package com.jpmorgan.codeforgood.service;


import com.jpmorgan.codeforgood.controller.response.CreateReportResponse;
import com.jpmorgan.codeforgood.controller.response.ReportResponse;
import com.jpmorgan.codeforgood.entity.Report;
import com.jpmorgan.codeforgood.repository.ReportRepository;
import com.jpmorgan.codeforgood.controller.request.ReportRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReportService {
    private final ReportRepository reportRepository;
    public List<ReportResponse> getAllReports() {
        List<Report> reports = reportRepository.findAll();
        return ReportResponse.from(reports);
    }

    public CreateReportResponse createReport(ReportRequest request) {
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
        return new CreateReportResponse(report.getId());
    }
}
