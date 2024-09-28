import { Social } from "../../components/Social";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export function Home() {
  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">
        Mateus Fernandes
      </h1>
      <span className="text-gray-50 mb-5 mt-20">👇🏽Veja meus links</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className=" bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
          <a href="">
            <p className="text-base md:text-lg">Linkedin</p>
          </a>
        </section>

        <footer className="flex justify-center gap-3 my-4">
          <Social url="teste">
            <FaFacebook size={35} color="#fff" />
          </Social>

          <Social url="teste">
            <FaInstagram size={35} color="#fff" />
          </Social>
          <Social url="teste">
          <FaYoutube size={35} color="#fff"/>
          </Social>
        </footer>
      </main>
    </div>
  );
}
