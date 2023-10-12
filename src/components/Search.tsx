type searchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState } from "react";

import { BsSearch } from "react-icons/bs";

function Search({ loadUser }: searchProps) {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;