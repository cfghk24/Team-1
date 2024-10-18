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

    @Column(name = "imgUrl", nullable = false, length = 100)
    private String imgUrl;

    @Column(name = "location", nullable = false, length = 255)
    private String location;

    @Column(name = "name", nullable = false, length = 100)
    private String name; // Name of the reporter

    @Column(name = "phoneNumber", nullable = false, length = 100)
    private String phoneNumber; // Phone number of the reporter

    @Column(name = "email", nullable = false, length = 100)
    private String email; // Email of the reporter

    @Column(name = "description", columnDefinition = "TEXT")
    private String description; // Description of the report

    @Column(name = "pictureURL", nullable = false, length = 255)
    private String pictureUrl; // Another picture URL (could be an additional image for the report)

    @Column(name = "donationAmount")
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
