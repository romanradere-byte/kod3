import { api } from "./api";

/* ============================
   TYPES
============================ */

export interface ResourceResponseDto {
  id: number;
  title: string;
  description: string;
  year: number;
  type: "FILE" | "LINK";
  url: string;
  key: string;
  coverUrl: string;
  authorId: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateResourceDto {
  title: string;
  description: string;
  authorId: number;
  tagIds: number[];
  year: number;
  coverUrl: string;
  type: "FILE" | "LINK";
  url: string;
  seriesId?: number;
  previewUrl?: string;
  previewText?: string;
}

/* ============================
   GET ALL (CATALOG)
============================ */

export const getResources = async (
  page: number,
  limit: number
): Promise<ResourceResponseDto[]> => {
  const { data } = await api.get<ResourceResponseDto[]>("/resources", {
    params: { page, limit },
  });

  return data;
};

/* ============================
   GET ONE (BOOK PAGE)
============================ */

export const getResourceById = async (
  id: number
): Promise<ResourceResponseDto> => {
  const { data } = await api.get<ResourceResponseDto>(
    `/resources/${id}`
  );

  return data;
};

/* ============================
   CREATE (ADMIN / LIBRARIAN)
============================ */

export const createResource = async (
  payload: CreateResourceDto
): Promise<ResourceResponseDto> => {
  const { data } = await api.post<ResourceResponseDto>(
    "/resources",
    payload
  );

  return data;
};

/* ============================
   UPDATE
============================ */

export const updateResource = async (
  id: number,
  payload: Partial<CreateResourceDto>
): Promise<ResourceResponseDto> => {
  const { data } = await api.patch<ResourceResponseDto>(
    `/resources/${id}`,
    payload
  );

  return data;
};

/* ============================
   DELETE
============================ */

export const deleteResource = async (id: number): Promise<void> => {
  await api.delete(`/resources/${id}`);
};

/* ============================
   DOWNLOAD FILE
============================ */

export const downloadResourceFile = async (
  id: number
): Promise<Blob> => {
  const { data } = await api.get(`/resources/${id}/file`, {
    responseType: "blob",
  });

  return data;
};
