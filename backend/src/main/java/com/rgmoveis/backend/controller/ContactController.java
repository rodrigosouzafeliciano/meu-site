package com.rgmoveis.backend.controller;

import com.rgmoveis.backend.model.ContactDTO;
import com.rgmoveis.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contato")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public ResponseEntity<String> submitContact(@RequestBody ContactDTO contact) {
        try {
            contactService.saveSubmission(contact);
            return ResponseEntity.ok("{\"message\": \"Mensagem recebida com sucesso!\"}");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("{\"error\": \"Erro ao processar mensagem.\"}");
        }
    }
}
