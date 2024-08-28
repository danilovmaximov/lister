package com.lister.tasks.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "stage")
public class Stage {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "stage_id_gen")
    @SequenceGenerator(name = "stage_id_gen", sequenceName = "stage_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Integer id;

    @NotNull
    @ManyToOne(optional = false)
    @ColumnDefault("nextval('stage_list_id_seq'::regclass)")
    @JoinColumn(name = "list_id", nullable = false)
    private List list;

    @Size(max = 100)
    @NotNull
    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @NotNull
    @Column(name = "order_value", nullable = false)
    private Short orderValue;

}