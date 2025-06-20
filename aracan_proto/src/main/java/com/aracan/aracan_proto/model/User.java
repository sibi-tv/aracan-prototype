package com.aracan.aracan_proto.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity // makes a table on mysql
public class User {

    @Id
    @GeneratedValue // Auto generates an id value
    private Long ID;
    private String USERNAME;
    private String NAME;
    private String EMAIL;

    public Long getID() { return ID; }
    public void setID(Long id) { this.ID = id; }

    public String getUSERNAME() { return USERNAME; }
    public void setUSERNAME(String username) { this.USERNAME = username; }

    public String getNAME() { return NAME; }
    public void setNAME(String name) { this.NAME = name; }

    public String getEMAIL() { return EMAIL; }
    public void setEMAIL(String email) { this.EMAIL = email; }

}
