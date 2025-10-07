package com.thilshan.todo.backend.controller;

import com.thilshan.todo.backend.dto.TaskRequestDto;
import com.thilshan.todo.backend.dto.TaskResponseDTO;
import com.thilshan.todo.backend.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
@CrossOrigin(origins = "*") //will change in future regarding security port
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<TaskResponseDTO> create(@RequestBody TaskRequestDto dto) {
        return ResponseEntity.ok(taskService.createTask(dto));
    }

    @GetMapping("/recent")
    public ResponseEntity<List<TaskResponseDTO>> getRecent() {
        return ResponseEntity.ok(taskService.getRecentTasks());
    }

    @PutMapping("/{id}/complete")
    public ResponseEntity<TaskResponseDTO> markAsCompleted(@PathVariable Long id) {
        return ResponseEntity.ok(taskService.markAsCompleted(id));
    }
}
