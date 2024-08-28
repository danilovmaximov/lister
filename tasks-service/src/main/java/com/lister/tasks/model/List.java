package com.lister.tasks.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "list")
public class List {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "list_id_gen")
    @SequenceGenerator(name = "list_id_gen", sequenceName = "list_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Size(max = 100)
    @NotNull
    @Column(name = "label", nullable = false, length = 100)
    private String label;

    @Size(max = 300)
    @Column(name = "text", length = 300)
    private String text;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "list")
    private Set<Stage> stages = new LinkedHashSet<>();

}