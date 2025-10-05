import React from "react";
import ItemList from "./ItemList";

const ItemSection = ({ title, itemsArray, items, path, idPath }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <ItemList
      title={title}
      items={items}
      itemsArray={itemsArray}
      path={path}
      idPath={idPath}
    />
  </section>
);

const Main = ({ type, artistArray, songsArray }) => {
  return (
    <div className="main p-4">
      {(type === "artists" || type === undefined) && (
        <ItemSection
          title="Artistas"
          itemsArray={artistArray}
          items={10}
          path="/artists"
          idPath="/artist"
        />
      )}

      {(type === "songs" || type === undefined) && (
        <ItemSection
          title="Músicas"
          itemsArray={songsArray}
          items={20}
          path="/songs"
          idPath="/song"
        />
      )}
    </div>
  );
};

export default Main;
