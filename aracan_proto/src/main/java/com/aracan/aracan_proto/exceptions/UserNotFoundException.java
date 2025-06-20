package com.aracan.aracan_proto.exceptions;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id) {
        super("Could not find the user with id " + id); // Calling the constructor of the "RuntimeException" class
    }
}
