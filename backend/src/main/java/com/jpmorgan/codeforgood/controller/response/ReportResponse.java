package com.jpmorgan.codeforgood.controller.response;

import com.jpmorgan.codeforgood.entity.Report;
import jakarta.persistence.Column;

import java.util.List;

public record ReportResponse (
        Long id,
        String imgUrl,
        String location,
        String name,
        String phoneNumber,
        String email,
        String description,
        Integer donationAmount,
        Integer donationMax
){
    public static List<ReportResponse> from(List<Report> reports) {
        return reports.stream()
                .map(report -> new ReportResponse(
                        report.getId(),
                        report.getImgUrl(),
                        report.getLocation(),
                        report.getName(),
                        report.getPhoneNumber(),
                        report.getEmail(),
                        report.getDescription(),
                        report.getDonationAmount(),
                        report.getDonationMax()
                ))
                .toList();
    }

    public static ReportResponse from(Report report) {
        return new ReportResponse(
                report.getId(),
                report.getImgUrl(),
                report.getLocation(),
                report.getName(),
                report.getPhoneNumber(),
                report.getEmail(),
                report.getDescription(),
                report.getDonationAmount(),
                report.getDonationMax()
        );
    }
}
