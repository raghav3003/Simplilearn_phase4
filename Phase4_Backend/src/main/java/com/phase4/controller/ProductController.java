package com.phase4.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.phase4.model.ProductEntity;
import com.phase4.repository.ProductRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/product")
public class ProductController {

	@Autowired
    ProductRepository productRepository;
	
//	@RequestMapping(method=RequestMethod.POST, value="/add")
//	public void addUser(@RequestBody UserEntity ue){
////	public void addUser(@RequestParam("username") String username, @RequestParam("password") String password, @RequestParam("lname") String lname, @RequestParam("fname") String fname){
//		System.out.println(ue.getFname() + " " + ue.getLname());
////		UserEntity ue = new UserEntity(username, fname, lname, password);
//		productRepository.save(ue);
//    }
	@RequestMapping(method=RequestMethod.POST, value="/add")
	public void addProduct(@RequestParam("name") String name, @RequestParam("brand") String brand, @RequestParam("price") double price) {
		int id = 0;
		ProductEntity pe = new ProductEntity(id, name, brand, price);
		productRepository.save(pe);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/all")
	public List<ProductEntity> getAllProducts(){
		return productRepository.findAll();
    }
	
	@RequestMapping(method=RequestMethod.DELETE, value="/delete")
    public void deleteProduct(@RequestParam("id") int id)  {
		productRepository.deleteById(id);
    }
	
//	@RequestMapping(method=RequestMethod.POST, value="/validate", produces = MediaType.TEXT_PLAIN_VALUE)
//	@ResponseBody
//	public String validateUser(@RequestParam("username") String username, @RequestParam("password") String password){
//		productRepository a = productRepository.findByUsername(username);
//		if (a == null) {
//			return Boolean.FALSE.toString();
//		}
//		
//		if (a.getPassword().equals(password)) {
//			return Boolean.TRUE.toString();
//		}
//		
//		return Boolean.FALSE.toString();
//    }
	
}
