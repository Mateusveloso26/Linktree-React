import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { FormEvent, useState, useEffect } from "react";
import { FiTrash } from "react-icons/fi";
import { db } from "../../services/firebaseConnection";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
  snapshotEqual,
} from "firebase/firestore";

interface LinkProps {
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
}

export function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [textColorInput, setTextColorInput] = useState("#f1f1f1");
  const [backgroundColorInput, setBackgroundColorInputColorInput] =
    useState("#121212");
  const [links, setLinks] = useState<LinkProps[]>([]);

  useEffect(() => {
    const linkRef = collection(db, "links");
    const queryRef = query(linkRef, orderBy("created", "asc"));

    const unsub = onSnapshot(queryRef, (snapshot) => {
      let lista = [] as LinkProps[];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bg: doc.data().bg,
          color: doc.data().color,
        });
      });
      setLinks(lista);
    });

    return () => {
      unsub();
    };
  }, []);

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    if (nameInput === "" || urlInput === "") {
      alert("Preencha todos os campos");
      return;
    }

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInput,
      color: textColorInput,
      created: new Date(),
    })
      .then(() => {
        setNameInput("");
        setUrlInput("");
        console.log("cadastrado com sucesso");
      })
      .catch((error) => {
        console.log("Erro ao cadastrar no banco", error);
      });
  }

  async function handleDelete(id: string) {
    const docRef = doc(db,"links",id)
    await deleteDoc(docRef)
    
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <form
        className="flex  flex-col mt-8 mb-4 w-full max-w-xl"
        onSubmit={handleRegister}
      >
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
      {links.map((item) => (
        <article
          key={item.id}
          className="flex items-center justify-between w-11/12 max-w-xl rounded px-2 mt-4 py-3 select-none  "
          style={{ background: item.bg, color: item.color }}
        >
          <p>{item.name}</p>
          <div>
            <button
              onClick={() => handleDelete(item.id)}
              className="border border-dashed p-1 bg-slate-900 rounded"
            >
              <FiTrash size={18} color="#fff" />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
