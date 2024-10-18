package com.jpmorgan.codeforgood.controller.request;

import lombok.Getter;

public record ReportRequest(
    String imgUrl,
    String location,
    String name,
    String phoneNumber,
    String email,
    String description,
    String pictureUrl
) {
}
