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

    @Column(name = "img_url", length = 100)
    private String imgUrl;

    @Column(name = "location", length = 255)
    private String location;

    @Column(name = "name", length = 100)
    private String name; // Name of the reporter

    @Column(name = "phone_number", length = 100)
    private String phoneNumber; // Phone number of the reporter

    @Column(name = "email", length = 100)
    private String email; // Email of the reporter

    @Column(name = "description", columnDefinition = "TEXT")
    private String description; // Description of the report

    @Column(name = "donation_amount")
    private Integer donationAmount;

    public static Report createReport(String imgUrl, String location, String name, String phoneNumber, String email, String description) {
        Report report = new Report();
        report.imgUrl = imgUrl;
        report.location = location;
        report.name = name;
        report.phoneNumber = phoneNumber;
        report.email = email;
        report.description = description;
        return report;
    }
}
