package com.example.proBarber;

import jakarta.websocket.server.PathParam;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/")
public class Controller {
    List<Produtos> prod = new ArrayList<>();
    @GetMapping
    public String raiz() {
        return "Raiz da aplicação";
    }

    @GetMapping("/Prod")
    public List<Produtos> produtos(){
        return prod;
    }
    @PostMapping("/Prod")
    public void insert(@RequestParam int id,@RequestParam String nome,@RequestParam double preco){
        prod.add(new Produtos(id,nome,preco));
    }


}