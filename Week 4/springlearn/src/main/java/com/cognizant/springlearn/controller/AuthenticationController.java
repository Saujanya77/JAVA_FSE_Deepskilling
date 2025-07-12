package com.cognizant.springlearn.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cognizant.springlearn.util.JwtUtil;

import java.util.Base64;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestHeader("Authorization") String authHeader) {
        // Decode Basic Auth header
        String base64Credentials = authHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String decoded = new String(decodedBytes);

        // "user:pwd"
        String[] creds = decoded.split(":", 2);
        String username = creds[0];
        String password = creds[1];

        // You can add logic to validate username/password here. We'll assume "user"/"pwd" is valid.
        if ("user".equals(username) && "pwd".equals(password)) {
            String token = JwtUtil.generateToken(username);
            return ResponseEntity.ok().body(new TokenResponse(token));
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    // Helper class to send JSON response
    static class TokenResponse {
        private String token;

        public TokenResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }

        public void setToken(String token) {
            this.token = token;
        }
    }
}
