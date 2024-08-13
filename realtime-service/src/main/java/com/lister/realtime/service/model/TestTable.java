package com.lister.realtime.service.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "test-table")
public class TestTable {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "value", length = Integer.MAX_VALUE)
    private String value;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}