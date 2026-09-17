/**
 * Utility functions for handling student profile picture upload, compression,
 * webcam frame capture, and avatar generation.
 */

export interface CropArea {
  zoom: number;
  rotation: number;
}

/**
 * Compresses and center-crops an uploaded image File to a lightweight base64 Data URL.
 * Standardizes to a crisp 400x400 square for fast rendering and minimal storage footprint.
 */
export const processImageFile = (
  file: File,
  targetSize: number = 400,
  quality: number = 0.88
): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('Selected file is not a valid image.'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = targetSize;
          canvas.height = targetSize;
          const ctx = canvas.getContext('2d');

          if (!ctx) {
            reject(new Error('Canvas 2D context not available'));
            return;
          }

          // Enable high quality rendering
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';

          // Calculate center square crop
          const srcWidth = img.naturalWidth || img.width;
          const srcHeight = img.naturalHeight || img.height;

          let sX = 0;
          let sY = 0;
          let sDim = 0;

          if (srcWidth > srcHeight) {
            sDim = srcHeight;
            sX = (srcWidth - srcHeight) / 2;
            sY = 0;
          } else {
            sDim = srcWidth;
            sX = 0;
            sY = (srcHeight - srcWidth) / 2;
          }

          ctx.drawImage(img, sX, sY, sDim, sDim, 0, 0, targetSize, targetSize);
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve(dataUrl);
        } catch (err) {
          reject(err);
        }
      };
      img.onerror = () => reject(new Error('Failed to load image file.'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read image file.'));
    reader.readAsDataURL(file);
  });
};

/**
 * Creates an image data URL from an HTMLVideoElement stream frame.
 */
export const captureVideoFrame = (
  video: HTMLVideoElement,
  targetSize: number = 400,
  quality: number = 0.90
): string => {
  const canvas = document.createElement('canvas');
  canvas.width = targetSize;
  canvas.height = targetSize;
  const ctx = canvas.getContext('2d');

  if (!ctx) return '';

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  const vWidth = video.videoWidth || 640;
  const vHeight = video.videoHeight || 480;

  let sX = 0;
  let sY = 0;
  let sDim = Math.min(vWidth, vHeight);

  if (vWidth > vHeight) {
    sX = (vWidth - vHeight) / 2;
    sY = 0;
  } else {
    sX = 0;
    sY = (vHeight - vWidth) / 2;
  }

  // Flip horizontally because webcam preview is usually mirrored
  ctx.translate(targetSize, 0);
  ctx.scale(-1, 1);

  ctx.drawImage(video, sX, sY, sDim, sDim, 0, 0, targetSize, targetSize);
  return canvas.toDataURL('image/jpeg', quality);
};

/**
 * Generates an SVG Data URI initials avatar with gradient styling
 */
export const generateInitialsAvatar = (
  name: string,
  gradientKey: 'emerald' | 'navy' | 'amber' | 'rose' | 'indigo' | 'cyan' = 'navy'
): string => {
  const trimmed = (name || 'Scholar Candidate').trim();
  const parts = trimmed.split(/\s+/);
  let initials = 'SC';
  if (parts.length >= 2) {
    initials = (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  } else if (parts.length === 1 && parts[0].length > 0) {
    initials = parts[0].substring(0, 2).toUpperCase();
  }

  const gradients: Record<string, [string, string]> = {
    navy: ['#002045', '#0c4a6e'],
    emerald: ['#064e3b', '#059669'],
    amber: ['#78350f', '#d97706'],
    rose: ['#881337', '#e11d48'],
    indigo: ['#312e81', '#6366f1'],
    cyan: ['#164e63', '#0891b2'],
  };

  const [color1, color2] = gradients[gradientKey] || gradients.navy;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}" />
        <stop offset="100%" stop-color="${color2}" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" rx="100" fill="url(#grad)" />
    <text x="50%" y="54%" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="78" font-weight="bold" fill="#ffffff" dominant-baseline="middle" text-anchor="middle" letter-spacing="2">
      ${initials}
    </text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

/**
 * Curated preset avatars for TOEFL scholars
 */
export const SCHOLAR_PRESET_AVATARS = [
  {
    id: 'scholar-1',
    label: 'Alex Vance (Classic Scholar)',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    category: 'Academic'
  },
  {
    id: 'scholar-2',
    label: 'Marcus Chen (Law / Poli-Sci)',
    url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    category: 'Academic'
  },
  {
    id: 'scholar-3',
    label: 'David Miller (Biochem Researcher)',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    category: 'STEM'
  },
  {
    id: 'scholar-4',
    label: 'Elena Rostova (Literature Fellow)',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
    category: 'Humanities'
  },
  {
    id: 'scholar-5',
    label: 'Liam Tanaka (Engineering & Robotics)',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    category: 'STEM'
  },
  {
    id: 'scholar-6',
    label: 'Sophia Patel (Medical Scholar)',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    category: 'Medical'
  },
  {
    id: 'scholar-7',
    label: 'Lucas Morales (Economics Fellow)',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
    category: 'Business'
  },
  {
    id: 'scholar-8',
    label: 'Zara Al-Mansoor (Data Science Candidate)',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    category: 'STEM'
  },
  {
    id: 'scholar-9',
    label: 'Noah Kim (Architecture & Urban Planning)',
    url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
    category: 'Design'
  },
  {
    id: 'scholar-10',
    label: 'Amina Diallo (Public Health Graduate)',
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    category: 'Medical'
  },
  {
    id: 'scholar-11',
    label: 'Oliver Hansen (Philosophy & Ethics)',
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    category: 'Humanities'
  },
  {
    id: 'scholar-12',
    label: 'Maya Lin (International Relations)',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    category: 'Academic'
  }
];
