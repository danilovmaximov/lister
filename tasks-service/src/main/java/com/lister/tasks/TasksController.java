package com.lister.tasks;

import com.lister.tasks.model.Task;
import com.lister.tasks.repository.TaskRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TasksController {

    private final TaskRepository taskRepository;

    public TasksController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable int id) {
        return taskRepository.findById(id).orElse(null);
    }

    @GetMapping
    public List<Task> listTasks() {
        return taskRepository.findAll();
    }

    @PostMapping
    public List<Task> addTask(Task task) {
        taskRepository.save(task);
        return listTasks();
    }

    @PutMapping
    public List<Task> updateTask(Task task) {
        taskRepository.save(task);
        return listTasks();
    }

    @DeleteMapping
    public List<Task> deleteTask(Task task) {
        taskRepository.delete(task);
        return listTasks();
    }

    @DeleteMapping("/{id}")
    public List<Task> deleteTaskById(@PathVariable int id) {
        taskRepository.deleteById(id);
        return listTasks();
    }
}