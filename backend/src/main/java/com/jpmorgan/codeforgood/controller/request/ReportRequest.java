package com.jpmorgan.codeforgood.controller.request;

import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

public record ReportRequest(
    String imgUrl,
    String location,
    String name,
    String phoneNumber,
    String email,
    String description
) {
}
