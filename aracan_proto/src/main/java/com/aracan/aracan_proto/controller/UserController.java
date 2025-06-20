package com.aracan.aracan_proto.controller;

import com.aracan.aracan_proto.exceptions.UserNotFoundException;
import com.aracan.aracan_proto.model.User;
import com.aracan.aracan_proto.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {

    @Autowired // injection
    private UserRepository userRepository;

    @PostMapping("/user") // "create"
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users") // "read?"
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}") // @PathVariable Binds the 'id' part of the URL to the 'id' method parameter
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUSERNAME(newUser.getUSERNAME());
                    user.setNAME(newUser.getNAME());
                    user.setEMAIL(newUser.getEMAIL());
                    return userRepository.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id) {
        if(!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id " + id + " has been deleted successfully.";
    }
}
