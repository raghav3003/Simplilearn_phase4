package com.phase4.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.phase4.model.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
	UserEntity findByUsername(String name);
}
