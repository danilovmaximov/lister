package com.lister.realtime.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class WebsocketController {

    private final TestTableRepository testTableRepository;

    @Autowired
    public WebsocketController(TestTableRepository testTableRepository) {
        this.testTableRepository = testTableRepository;
    }

    @MessageMapping("/retrieve")
    @SendTo("/topic/values")
    public List<TestTable> retrieve() {
        return testTableRepository.findAll();
    }
}
