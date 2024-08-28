package com.lister.tasks.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "statuses")
public class Status {
    @Id
    @Size(max = 50)
    @SequenceGenerator(name = "statuses_id_gen", sequenceName = "stage_id_seq", allocationSize = 1)
    @Column(name = "status_name", nullable = false, length = 50)
    private String statusName;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "status")
    private Set<Task> tasks = new LinkedHashSet<>();

}