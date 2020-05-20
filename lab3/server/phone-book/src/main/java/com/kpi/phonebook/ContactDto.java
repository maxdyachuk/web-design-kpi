package com.kpi.phonebook;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactDto {

    Long id;
    String name;
    List<String> numbers;

    public ContactDto(Contact model) {
        id = model.getId();
        name = model.getName();
        numbers = model.getNumbers();
    }
}
