package com.thilshan.todo.backend.service;

import com.thilshan.todo.backend.dto.TaskRequestDto;
import com.thilshan.todo.backend.dto.TaskResponseDTO;

import java.util.List;


public interface TaskService {
    TaskResponseDTO createTask(TaskRequestDto dto);
    List<TaskResponseDTO> getRecentTasks();
    TaskResponseDTO markAsCompleted(Long id);

}
