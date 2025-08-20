import Image from "next/image";
import loader from "../../assets/loader.gif";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Image
        src={loader}
        alt="Loading..."
        width={50}
        height={50}
        className="animate-spin"
      />
    </div>
  );
}
