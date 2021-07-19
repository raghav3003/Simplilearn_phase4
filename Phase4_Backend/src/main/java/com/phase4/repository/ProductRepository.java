package com.phase4.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.phase4.model.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, Integer>{
	List<ProductEntity> findByName(String name);
	List<ProductEntity> findByBrand(String name);
}
