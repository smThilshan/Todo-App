package com.thilshan.todo.backend.dto;

import lombok.Data;

@Data
public class TaskRequestDto {
    private String title;
    private String description;
}
