package com.kpi.phonebook;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ElementCollection
    private List<String> numbers;
}
