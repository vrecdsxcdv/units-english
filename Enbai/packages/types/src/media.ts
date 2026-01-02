/**
 * Audio submission status
 */
export type AudioSubmissionStatus =
  | 'pending_upload'
  | 'uploaded'
  | 'processing'
  | 'transcribed'
  | 'processed'
  | 'failed';

/**
 * Audio submission entity
 */
export interface AudioSubmission {
  id: string;
  userId: string;
  taskAttemptId: string | null;

  // Storage
  storageKey: string;
  storageBucket: string;

  // Metadata
  durationSeconds: number | null;
  fileSizeBytes: number;
  mimeType: string;
  sampleRate: number | null;

  // Processing
  status: AudioSubmissionStatus;
  transcription: string | null;
  transcriptionConfidence: number | null;

  // Pronunciation analysis
  pronunciationScore: number | null;
  pronunciationDetails: {
    phonemeScores?: Array<{
      phoneme: string;
      expected: string;
      actual: string;
      score: number;
    }>;
    fluencyScore?: number;
    intonationScore?: number;
  } | null;

  // Timing
  uploadedAt: string | null;
  processedAt: string | null;

  createdAt: string;
}

// ============================================
// API TYPES
// ============================================

/**
 * Init audio upload request
 */
export interface InitAudioUploadRequest {
  taskId: string;
  mimeType: string;
  fileSize: number;
}

/**
 * Init audio upload response
 */
export interface InitAudioUploadResponse {
  uploadUrl: string;
  submissionId: string;
  fields?: Record<string, string>; // For presigned POST
}

/**
 * Confirm upload response
 */
export interface ConfirmAudioUploadResponse {
  submission: AudioSubmission;
  processingStarted: boolean;
}

/**
 * Get audio URL response
 */
export interface GetAudioUrlResponse {
  url: string;
  expiresAt: string;
}
