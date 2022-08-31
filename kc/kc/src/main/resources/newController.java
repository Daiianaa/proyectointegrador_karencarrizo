/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author 54112
 */
@io.micronaut.http.annotation.Controller("/new")
public class newController {

    @io.micronaut.http.annotation.Get(uri = "/", produces = "text/plain")
    public String index() {
        return "Example Response";
    }
    
}
