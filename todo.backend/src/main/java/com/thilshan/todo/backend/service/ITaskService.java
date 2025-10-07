package com.thilshan.todo.backend.service;

import com.thilshan.todo.backend.dto.TaskRequestDto;
import com.thilshan.todo.backend.dto.TaskResponseDTO;
import com.thilshan.todo.backend.mapper.TaskMapper;
import com.thilshan.todo.backend.model.Task;
import com.thilshan.todo.backend.repository.TaskRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ITaskService implements TaskService{

    private final TaskRepository repository;
    private final TaskMapper mapper;

    @Override
    public TaskResponseDTO createTask(TaskRequestDto dto) {
        Task task = mapper.toEntity(dto);
        return mapper.toResponse(repository.save(task));
    }

    @Override
    public List<TaskResponseDTO> getRecentTasks() {
        return repository.findTop5ByCompletedFalseOrderByCreatedAtDesc()
                .stream()
                .map(mapper::toResponse)
                .toList();
    }

    @Override
    public TaskResponseDTO markAsCompleted(Long id) {
        Task task = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found "));
        task.setCompleted(true);
        return mapper.toResponse(repository.save(task));
    }
}
