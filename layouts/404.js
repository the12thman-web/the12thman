import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = ({ title }) => {
  const router = useRouter();
  
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/');
    }, 1500);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, []);
  
  return (
    <section className="section">
      <div className="container">
        <div className="flex h-[40vh] items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4">{title}</h1>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
