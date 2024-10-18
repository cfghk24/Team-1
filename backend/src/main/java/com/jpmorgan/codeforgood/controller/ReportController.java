package com.jpmorgan.codeforgood.controller;

import com.jpmorgan.codeforgood.controller.request.ReportRequest;
import com.jpmorgan.codeforgood.controller.response.ReportResponse;
import com.jpmorgan.codeforgood.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/reports")
public class ReportController {
    private final ReportService reportService;

    @PostMapping("")
    public ResponseEntity<ReportResponse> createReport(@RequestBody ReportRequest request) {
        ReportResponse response = reportService.createReport(request);
        return ResponseEntity.ok(response);
    }

}
