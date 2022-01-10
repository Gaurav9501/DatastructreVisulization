package com.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {


@RequestMapping("/home")
public String home(Model model) {
	model.addAttribute("title","home");
	return "home";
}


@RequestMapping("/DS")
public String DS(Model model) {
	model.addAttribute("title","DataStructures");
	return "datastruct";
}


@RequestMapping("/Algo")
public String Algo(Model model) {
	model.addAttribute("title","Algorithms");
	return "algorithms";
}

@RequestMapping("/classroom")
public String classroom(Model model) {
	model.addAttribute("title","Algorithms");
	return "classroom";
}

@RequestMapping("/test")
public String test(Model model) {
	model.addAttribute("title","Algorithms");
	return "test";
}

@RequestMapping("/Array")
public String Array(Model model) {
	model.addAttribute("title","Algorithms");
	return "Array";
}

@RequestMapping("/LL")
public String LL(Model model) {
	model.addAttribute("title","Algorithms");
	return "LinkedList";
}



@RequestMapping("/stack")
public String stack(Model model) {
	model.addAttribute("title","Algorithms");
	return "Stack";
}

@RequestMapping("/queue")
public String queue(Model model) {
	model.addAttribute("title","Algorithms");
	return "Queue";
}

@RequestMapping("/tree")
public String tree(Model model) {
	model.addAttribute("title","Algorithms");
	return "Tree";
}






	
	
}
