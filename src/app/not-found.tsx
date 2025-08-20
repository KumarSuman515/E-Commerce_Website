"use client";
import { APP_NAME } from "../lib/constants";
import Image from "next/image";
import { Button } from "../components/ui/button";

import logo from "../../public/images/logo.svg";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p>Could not find requested page</p>
      <Button variant={"outline"} className="mt-4">
        <Image
          src={logo}
          alt={APP_NAME}
          width={40}
          height={40}
          className="rounded mr-2"          
        />
        <span>Go to Home</span>
        </Button>
        <p className="mt-2">Or try going back to the previous page.</p>
    </div>
  );
}
export default NotFoundPage;