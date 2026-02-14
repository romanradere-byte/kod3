import { ResourceResponseDto } from "@/services/resources.service";
import { UiBook } from "@/types/ui-book";

export const mapResourceToUiBook = (
  resource: ResourceResponseDto
): UiBook => {
  return {
    id: resource.id,
    title: resource.title,
    description: resource.description,
    year: resource.year,
    fileUrl: resource.url,

    author: "Unknown Author",
    tags: [],
    cover: "/placeholder.jpg",
    rating: 0,
  };
};
