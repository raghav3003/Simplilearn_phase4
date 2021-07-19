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

import com.phase4.repository.UserRepository;
import com.phase4.model.UserEntity;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/user")
public class UserController {

	@Autowired
    UserRepository userRepository;
	
	@RequestMapping(method=RequestMethod.POST, value="/add")
	public void addUser(@RequestBody UserEntity ue){
//	public void addUser(@RequestParam("username") String username, @RequestParam("password") String password, @RequestParam("lname") String lname, @RequestParam("fname") String fname){
		System.out.println(ue.getFname() + " " + ue.getLname());
//		UserEntity ue = new UserEntity(username, fname, lname, password);
		userRepository.save(ue);
    }
	
	@RequestMapping(method=RequestMethod.POST, value="/updatePassword")
	public String updatePassword(@RequestParam("username") String username, @RequestParam("password") String password, @RequestParam("oldPassword") String oldPassword){
		UserEntity ue = userRepository.findByUsername(username);
		
		if (ue.getPassword().equals(oldPassword)) {
			ue.setPassword(password);
			userRepository.save(ue);
			return Boolean.TRUE.toString();
		}
		return Boolean.FALSE.toString();
    }
	
	@RequestMapping(method=RequestMethod.GET, value="/all")
	public List<UserEntity> getAllUsers(){
		return userRepository.findAll();
    }
	
	@RequestMapping(method=RequestMethod.POST, value="/validate", produces = MediaType.TEXT_PLAIN_VALUE)
	@ResponseBody
	public String validateUser(@RequestParam("username") String username, @RequestParam("password") String password){
		UserEntity a = userRepository.findByUsername(username);
		if (a == null) {
			return Boolean.FALSE.toString();
		}
		
		if (a.getPassword().equals(password)) {
			return Boolean.TRUE.toString();
		}
		
		return Boolean.FALSE.toString();
    }
	
//	@RequestMapping(method=RequestMethod.GET, value="/validate")
//	public void validateUser(@RequestBody String username, String password){
////		userRepository.save(ue);
//		
//    }
	
}
