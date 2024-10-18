package com.jpmorgan.codeforgood.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "report")
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imgUrl; // Image URL

    private String location; // Location of the report

    private String name; // Name of the reporter

    private String phoneNumber; // Phone number of the reporter

    private String email; // Email of the reporter

    private String description; // Description of the report

    private String pictureUrl; // Another picture URL (could be an additional image for the report)

    private int donationAmount;

    public static Report createReport(String imgUrl, String location, String name, String phoneNumber, String email, String description, String pictureUrl) {
        Report report = new Report();
        report.imgUrl = imgUrl;
        report.location = location;
        report.name = name;
        report.phoneNumber = phoneNumber;
        report.email = email;
        report.description = description;
        report.pictureUrl = pictureUrl;
        return report;
    }
}
