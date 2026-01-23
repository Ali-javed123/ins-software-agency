interface User {
  id: string;
  title: string;
  heading: number;
  btnOne: string;
  btnTwo: string;
  profileImage: string | null; // Changed from 'image' to 'profileImage'
  profileImageUrl?: string | null; // undefined भी allow करें
}
interface DatabaseUser {
  id: string;
  title: string;
  heading: number;
  btnOne: string;
  btnTwo: string;
  profileImage: string | null;
  created_at?: string;
}
export type { User, DatabaseUser };