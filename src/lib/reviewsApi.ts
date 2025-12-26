import type {
  Review,
  AdminReview,
  CreateReviewPayload,
  CreateReviewResponse,
  ApiResponse,
  PaginatedReviewsResponse,
} from "@/types/review";

// Use local API routes instead of external server
const API_BASE_URL = "/api";

// ==================== PUBLIC API ====================

export async function getApprovedReviews(): Promise<Review[]> {
  const response = await fetch(`${API_BASE_URL}/reviews`);

  if (!response.ok) {
    throw new Error("Failed to fetch approved reviews");
  }

  const data = await response.json();

  // Map database fields to Review type
  return data.map((review: any) => ({
    id: review.userName,
    text: review.text,
    rating: review.rating || 5,
    isTrue: review.isTrue,
  }));
}

export async function createReview(
  payload: CreateReviewPayload
): Promise<CreateReviewResponse> {
  const response = await fetch(`${API_BASE_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to create review");
  }

  const data = await response.json();

  return {
    reviewId: data.id,
    id: data.userName,
    text: data.text,
    isTrue: data.isTrue,
    message: data.message,
  };
}

// ==================== ADMIN API ====================

export async function adminGetAllReviews(
  token: string,
  page: number = 1,
  limit: number = 50
): Promise<PaginatedReviewsResponse> {
  const response = await fetch(
    `${API_BASE_URL}/admin/reviews?page=${page}&limit=${limit}`,
    {
      credentials: "include",
    }
  );

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new Error("Unauthorized");
    }
    throw new Error("Failed to fetch reviews");
  }

  const data = await response.json();

  // Map database fields to AdminReview type
  return {
    reviews: data.reviews.map((review: any) => ({
      reviewId: review.id,
      id: review.userName,
      text: review.text,
      rating: review.rating || 5,
      isTrue: review.isTrue,
      createdAt: new Date(review.createdAt).getTime(),
    })),
    pagination: data.pagination,
  };
}

export async function adminApprove(
  reviewId: string,
  token: string
): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE_URL}/admin/reviews/${reviewId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ action: "approve" }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to approve review");
  }

  return response.json();
}

export async function adminReject(
  reviewId: string,
  token: string
): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE_URL}/admin/reviews/${reviewId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ action: "reject" }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to reject review");
  }

  return response.json();
}

export async function adminDelete(
  reviewId: string,
  token: string
): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE_URL}/admin/reviews/${reviewId}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to delete review");
  }

  return response.json();
}
