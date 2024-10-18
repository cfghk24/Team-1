package com.jpmorgan.codeforgood.controller;

import com.jpmorgan.codeforgood.controller.request.ReportRequest;
import com.jpmorgan.codeforgood.controller.response.CreateReportResponse;
import com.jpmorgan.codeforgood.controller.response.ReportResponse;
import com.jpmorgan.codeforgood.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/reports")
public class ReportController {
    private final ReportService reportService;

    @GetMapping("")
    public ResponseEntity<List<ReportResponse>> getAllReports() {
        return ResponseEntity.ok(reportService.getAllReports());
    }
    @PostMapping("")
    public ResponseEntity<CreateReportResponse> createReport(@RequestBody ReportRequest request) {
        CreateReportResponse response = reportService.createReport(request);
        return ResponseEntity.ok(response);
    }

}
