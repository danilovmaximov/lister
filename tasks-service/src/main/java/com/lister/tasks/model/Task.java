package com.lister.tasks.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "task_id_gen")
    @SequenceGenerator(name = "task_id_gen", sequenceName = "task_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Size(max = 100)
    @NotNull
    @Column(name = "label", nullable = false, length = 100)
    private String label;

    @Column(name = "due_date")
    private LocalDate dueDate;

    @Size(max = 400)
    @Column(name = "text", length = 400)
    private String text;

    @NotNull
    @ManyToOne(optional = false)
    @ColumnDefault("nextval('task_author_seq'::regclass)")
    @JoinColumn(name = "author", referencedColumnName = "id", nullable = false)
    private User author;

    @ManyToOne(fetch = FetchType.EAGER)
    @ColumnDefault("nextval('task_assignee_seq'::regclass)")
    @JoinColumn(name = "assignee",  referencedColumnName = "id")
    private User assignee;

    @NotNull
    @ManyToOne(optional = false)
    @ColumnDefault("nextval('task_list_id_seq'::regclass)")
    @JoinColumn(name = "list_id", referencedColumnName = "id", nullable = false)
    private List list;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "status", referencedColumnName = "status_name")
    private Status status;

}