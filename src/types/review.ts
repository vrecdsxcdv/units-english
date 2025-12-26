export interface Review {
  id: string;
  text: string;
  rating: number;
  isTrue: boolean;
}

export interface AdminReview extends Review {
  reviewId: string;
  createdAt: number;
}

export interface CreateReviewPayload {
  id: string;
  text: string;
  rating: number;
}

export interface CreateReviewResponse {
  reviewId: string;
  id: string;
  text: string;
  rating: number;
  isTrue: boolean;
  message: string;
}

export interface ApiResponse {
  message: string;
  reviewId?: string;
  error?: string;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedReviewsResponse {
  reviews: AdminReview[];
  pagination: PaginationInfo;
}
