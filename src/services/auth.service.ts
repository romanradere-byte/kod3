import { api } from "./api";

export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface RegisterRequestDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface AuthResponse {
  accessToken: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  };
}

export const login = async (
  data: LoginRequestDto
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/auth/login", data);

  localStorage.setItem("token", response.data.accessToken);
  localStorage.setItem(
    "elib_user",
    JSON.stringify(response.data.user)
  );

  return response.data;
};

export const register = async (
  data: RegisterRequestDto
) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("elib_user");
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("elib_user");

  if (!user) return null;

  try {
    return JSON.parse(user);
  } catch {
    return null;
  }
};
