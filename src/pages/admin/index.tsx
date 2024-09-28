import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { useState } from "react";
import { FiTrash } from "react-icons/fi";

export function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [textColorInput, setTextColorInput] = useState("#f1f1f1");
  const [backgroundColorInput, setBackgroundColorInputColorInput] =
    useState("#121212");

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <form className="flex  flex-col mt-8 mb-4 w-full max-w-xl">
        <label htmlFor="" className="text-white font-medium mt-2 mb-2">
          Nome do link
        </label>
        <Input
          placeholder="teste"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label htmlFor="" className="text-white font-medium mt-2 mb-2">
          URL do link
        </label>
        <Input
          type="url"
          placeholder="teste"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="flex m-4 gap-5">
          <div className="flex gap-2 items-center">
            <label htmlFor="" className="text-white font-medium mt-2 mb-2">
              Cor do link
            </label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>

          <div className="flex gap-2 items-center">
            <label htmlFor="" className="text-white font-medium mt-2 mb-2">
              Fundo do link
            </label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) =>
                setBackgroundColorInputColorInput(e.target.value)
              }
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="flex items-center justify-center flex-col  my-6 p-1 border-gray-100/25 border rounded-md">
            <label htmlFor="" className="text-white font-medium mt-2 mb-3">
              Veja como está ficando:
            </label>
            <article
              className="w-11/12 max-w-lg flex flex-col justify-between items-center bg-slate-800 rounded px-1 py-3"
              style={{
                marginBottom: 8,
                marginTop: 8,
                background: backgroundColorInput,
              }}
            >
              <p className="font-medium" style={{ color: textColorInput }}>
                {nameInput}
              </p>
            </article>
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center mb-7"
        >
          Cadastrar
        </button>
      </form>

      <h2 className="font-bold text-white text-2xl">Meus Links</h2>

      <article className="flex items-center justify-between w-11/12 max-w-xl rounded px-2 mb-2 py-3 select-none  " style={{background: "#2563EB", color: "#000"}}>
        <p>TESTE</p>
        <div>
          <button className="border border-dashed p-1 bg-slate-900 rounded">
            <FiTrash size={18} color="#fff" />
          </button>
        </div>
      </article>
    </div>
  );
}
