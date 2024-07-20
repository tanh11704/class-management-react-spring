package com.workplex.server.service;

import com.workplex.server.dto.LoginDTO;
import com.workplex.server.dto.RegisterDTO;
import com.workplex.server.entity.User;

public interface IAuthService {
    String login(LoginDTO loginDto);
    User register(RegisterDTO registerDTO);
}
