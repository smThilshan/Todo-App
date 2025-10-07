package com.thilshan.todo.backend.mapper;

import com.thilshan.todo.backend.dto.TaskRequestDto;
import com.thilshan.todo.backend.dto.TaskResponseDTO;
import com.thilshan.todo.backend.model.Task;
import org.springframework.stereotype.Component;

@Component
public class TaskMapper {
    public Task toEntity(TaskRequestDto dto) {
        return Task.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .build();
    }

    public TaskResponseDTO toResponse(Task entity) {
        return TaskResponseDTO.builder()
                .id(entity.getId())
                .title(entity.getTitle())
                .description(entity.getDescription())
                .createdAt(entity.getCreatedAt())
                .build();
    }
}
