import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-3xl lg:text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          🔍 Master's student in Informatics | 🧠 Diving deep into machine learning & web dev
          🚀 Exploring tech, one project at a time | 🌱 Growing through code
          📚 Sharing my learning journey | 🤝 Let's connect!
          📍 Bergen, UiB Alum
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            
            <a
              href={`https://github.com/IlyasMohamud`}
              className="x-3 bg-blue-600 hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              
            >
              Github
            </a>
            <a
              href={`https://www.linkedin.com/in/ilyasahmedmohamud/`}
              className="x-3 bg-blue-900 hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              
            >
              LinkedIn
            </a>
            <a
              href={`https://www.instagram.com/sexysomalian99/`}
              className="x-3 bg-pink-500 hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              
            >
              Instagram
            </a>
            
            
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
