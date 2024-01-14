export interface RandomPhotos {
  id?: string;
  slug?: string;
  created_at?: string;
  updated_at?: string;
  promoted_at?: string;
  width?: number;
  height?: number;
  color?: string;
  blur_hash?: string;
  description?: string | null;
  alt_description?: string;
  breadcrumbs?: string[];
  urls?: {
    raw?: string;
    full?: string;
    regular?: string;
    small?: string;
    thumb?: string;
    small_s3?: string;
  };
  links?: {
    self?: string;
    html?: string;
    download?: string;
    download_location?: string;
  };
  likes?: number;
  liked_by_user?: boolean;
  current_user_collections?: string[];
  sponsorship?: null;
  topic_submissions?: Record<string, unknown>; // The structure here depends on the actual data
  user?: {
    id?: string;
    updated_at?: string;
    username?: string;
    name?: string;
    first_name?: string;
    last_name?: string | null;
    twitter_username?: string;
    portfolio_url?: string | null;
    bio?: string;
    location?: string;
    links?: {
      self?: string;
      html?: string;
      photos?: string;
      likes?: string;
      portfolio?: string;
      following?: string;
      followers?: string;
    };
    profile_image?: {
      small?: string;
      medium?: string;
      large?: string;
    };
    instagram_username?: string;
    total_collections?: number;
    total_likes?: number;
    total_photos?: number;
    accepted_tos?: boolean;
    for_hire?: boolean;
    social?: {
      instagram_username?: string;
      portfolio_url?: string | null;
      twitter_username?: string;
      paypal_email?: string | null;
    };
  };
  exif?: {
    make?: string | null;
    model?: string | null;
    name?: string | null;
    exposure_time?: string | null;
    aperture?: string | null;
    focal_length?: string | null;
    iso?: number | null;
  };
  location?: {
    name?: string | null;
    city?: string | null;
    country?: string | null;
    position?: {
      latitude?: number | null;
      longitude?: number | null;
    };
  };
  meta?: {
    index?: boolean;
  };
  public_domain?: boolean;
  tags?: { type?: string; title?: string }[];
  tags_preview?: { type?: string; title?: string }[];
  views?: number;
  downloads?: number;
  topics?: string[];
}




export interface searchedPhotos {
  id?: string;
  slug?: string;
  created_at?: string;
  updated_at?: string;
  promoted_at?: string | null;
  width?: number;
  height?: number;
  color?: string;
  blur_hash?: string;
  description?: string | null;
  alt_description?: string | null;
  breadcrumbs?: any[]; // You might define a more specific type for breadcrumbs
  urls?: {
    raw?: string;
    full?: string;
    regular?: string;
    small?: string;
    thumb?: string;
    small_s3?: string;
  };
  links?: {
    self?: string;
    html?: string;
    download?: string;
    download_location?: string;
  };
  likes?: number;
  liked_by_user?: boolean;
  current_user_collections?: any[]; // You might define a more specific type
  sponsorship?: any; // You might define a more specific type for sponsorship
  topic_submissions?: {
    [key: string]: {
      status: string;
      approved_on: string;
    };
  };
  user?: {
    id?: string;
    updated_at?: string;
    username?: string;
    name?: string;
    first_name?: string;
    last_name?: string;
    twitter_username?: string | null;
    portfolio_url?: string | null;
    bio?: string | null;
    location?: string | null;
    links?: {
      self?: string;
      html?: string;
      photos?: string;
      likes?: string;
      portfolio?: string;
      following?: string;
      followers?: string;
    };
    profile_image?: {
      small?: string;
      medium?: string;
      large?: string;
    };
    instagram_username?: string | null;
    total_collections?: number;
    total_likes?: number;
    total_photos?: number;
    total_promoted_photos?: number;
    accepted_tos?: boolean;
    for_hire?: boolean;
    social?: {
      instagram_username?: string;
      portfolio_url?: string | null;
      twitter_username?: string | null;
      paypal_email?: string | null;
    };
  };
  tags?: {
    type: string;
    title: string;
  }[];
}

export interface ViewStockPhotos {
  id: number;
  width: number;
  height: number;
  url?: string;
  photographer?: string;
  photographer_url?: string;
  photographer_id?: number;
  avg_color?: string;
  src?: {
    original?: string;
    large2x?: string;
    large?: string;
    medium?: string;
    small?: string;
    portrait?: string;
    landscape?: string;
    tiny?: string;
  };
  liked?: boolean;
  alt?: string;
}
