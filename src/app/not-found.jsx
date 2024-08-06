import Link from "next/link";

const NotFound = () => {
  return (
    <div>
     <h5>Not Found</h5>
      <p>this page doesn't exist</p>
      <Link href={"/"}>Return to Home</Link>
    </div>
  );
};

export default NotFound;
