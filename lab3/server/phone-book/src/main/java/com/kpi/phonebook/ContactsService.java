package com.kpi.phonebook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ContactsService {

    private final ContactsRepository repository;

    @Autowired
    public ContactsService(ContactsRepository repository) {
        this.repository = repository;
    }

    public Optional<ContactDto> getOne(long id) {
        return repository.findById(id).map(ContactDto::new);
    }

    public List<ContactDto> getAllSorted() {
        return repository.findAll().stream()
                .sorted(Comparator.comparing(Contact::getName))
                .map(ContactDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public ContactDto create(ContactDto dto) {
        Contact model = new Contact();
        model.setName(dto.getName());
        model.setNumbers(dto.getNumbers());
        repository.save(model);
        return new ContactDto(model);
    }

    @Transactional
    public Optional<ContactDto> update(long id, ContactDto dto) {
        return repository.findById(id)
                .map(contact -> {
                    contact.setName(dto.getName());
                    contact.setNumbers(dto.getNumbers());
                    return contact;
                })
                .map(repository::save)
                .map(ContactDto::new);
    }

    @Transactional
    public void delete(long id) {
        repository.deleteById(id);
    }
}
