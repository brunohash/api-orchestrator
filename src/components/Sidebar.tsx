import { Edge, Node, useReactFlow } from "reactflow";
import { Modal } from "./modal"
import { useDnD } from "../hooks/useDnD";
import { useState } from "react";

function Sidebar()
{
  const {setType} = useDnD();
  
  const [ modalOpen, setModalOpen ] = useState(false);

  const [ modalData, setModalData ] = useState<{
    nodes: Node[],
    edges: Edge[],
  } | undefined>(undefined);
  
  const { getEdges, getNodes } = useReactFlow();

  function handlerSave() {
    const nodes = getNodes();
    const edges = getEdges();

    console.log(nodes, edges);

    setModalOpen(true);
    setModalData({ nodes, edges });
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: string) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">Arraste e solte para criar sua própria orquestração</div>

      <h2 className="text-lg pb-3">🗳️  Módulos </h2> 

      <div className="dndnode whatsapp" onDragStart={(event) => onDragStart(event, 'whatsapp')} draggable>
        Whatsapp
      </div> 

      <div className="dndnode rating" onDragStart={(event) => onDragStart(event, 'rating')} draggable>
        Ratings
      </div> 

      <h2 className="text-lg pb-3">🗳️  External </h2> 
      
      <div className="dndnode asp" onDragStart={(event) => onDragStart(event, 'asp')} draggable>
        Asp Tókio
      </div> 

      <div className="w-100 flex justify-center items-center">
        <button className="teste" onClick={handlerSave}>
          Generate Flow
        </button>
      </div>

      <Modal open={modalOpen} setOpen={setModalOpen} flow={modalData} />
    </aside>
  );
};

export default Sidebar;