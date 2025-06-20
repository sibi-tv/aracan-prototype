package com.aracan.aracan_proto.repository;

import com.aracan.aracan_proto.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {


}
