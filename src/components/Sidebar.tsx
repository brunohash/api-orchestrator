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
      <div className="description">Arraste</div>
      <div className="dndnode trigger" onDragStart={(event) => onDragStart(event, 'trigger')} draggable>
        ⚡️
      </div>
      <div className="dndnode authentication" onDragStart={(event) => onDragStart(event, 'authentication')} draggable>
        Authentication
      </div>
      <div className="dndnode transaction" onDragStart={(event) => onDragStart(event, 'transaction')} draggable>
        Transaction
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