interface User {
  id: string;
  title: string;
  heading: number;
  btn_one: string;
  btn_two: string;
  profile_image: string | null; // Changed from 'image' to 'profileImage'
  profile_imageUrl?: string | null; // undefined भी allow करें
}
interface DatabaseUser {
  id: string;
  title: string;
  heading: number;
  btn_one: string;
  btn_two: string;
  profile_image: string | null;
  created_at?: string;
}
export type { User, DatabaseUser };