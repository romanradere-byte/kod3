import { api } from "./api";

export interface ResourceResponseDto {
  id: number;
  title: string;
  description: string;
  year: number;
  url: string;
  ext: string;
  createdAt: string;
  updatedAt: string;
}

export const getResources = async (
  page: number,
  limit: number
): Promise<ResourceResponseDto[]> => {
  const response = await api.get("/resources", {
    params: { page, limit },
  });

  return response.data;
};
