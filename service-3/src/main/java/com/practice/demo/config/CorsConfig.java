package com.practice.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    public CorsConfig() {
        System.out.println("***** CorsConfig Loaded *****");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        System.out.println("***** addCorsMappings Executed *****");

        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("*")
                .allowedHeaders("*");
    }
}