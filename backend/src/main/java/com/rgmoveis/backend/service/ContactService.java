package com.rgmoveis.backend.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rgmoveis.backend.model.ContactDTO;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ContactService {

    private final String FILE_PATH = "submissions.json";
    private final ObjectMapper objectMapper = new ObjectMapper();

    public void saveSubmission(ContactDTO contact) {
        File file = new File(FILE_PATH);
        List<ContactDTO> submissions = new ArrayList<>();

        try {
            if (file.exists() && file.length() > 0) {
                submissions = objectMapper.readValue(file, new TypeReference<List<ContactDTO>>() {});
            }
            submissions.add(contact);
            objectMapper.writeValue(file, submissions);
            System.out.println("Submission saved: " + contact);
        } catch (IOException e) {
            System.err.println("Error saving submission: " + e.getMessage());
            e.printStackTrace();
            throw new RuntimeException("Failed to save submission");
        }
    }
}
