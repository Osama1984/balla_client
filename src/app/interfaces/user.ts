export interface User {
  username?:string | null | undefined;
  email?:string | null | undefined;
  phone?:string | null | undefined;
  password?:string |null | undefined;
  profile_image?:File | null | undefined;
  address?:Address | null | undefined;
}

export interface userInfo {
  username:string;
  email:string;
  phone:string;
  password:string;
  profile_image:File;
}

export interface Address{
  address:string;
  city:string;
  state:string;
  country:string;
  zip:string;
}

export interface userError{
  message:string;
}
