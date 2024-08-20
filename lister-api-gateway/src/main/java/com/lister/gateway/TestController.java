package com.lister.gateway;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin(origins = "*")
public class TestController {

    @GetMapping("/test")
    public @ResponseBody String test() {
        return "Мы молодцы!";
    }
}
