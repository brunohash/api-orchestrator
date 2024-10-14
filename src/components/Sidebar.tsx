import { Edge, Node, useReactFlow } from "reactflow";
import { Modal } from "./modal"
import { useDnD } from "../hooks/useDnD";
import { useState } from "react";
import { PiGraphDuotone, PiArrowBendDownRightDuotone } from 'react-icons/pi';

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
    <aside className="border-l shadow p-4 relative">

      <div className="w-full flex justify-center mb-4">
        <PiGraphDuotone className="size-24 text-blue-500"/>
      </div>

      <h3 className="text-lg font-bold">WorkFlow</h3>

      <div className="description">Arraste e solte para criar sua própria orquestração</div>

      <h2 className="text-md pb-3 pt-4 flex gap-2 items-center"><PiArrowBendDownRightDuotone />  Módulos Disponíveis</h2> 

      <div className="dndnode whatsapp hover:bg-blue-500 hover:text-white transition-colors duration-200 hover:border-none" onDragStart={(event) => onDragStart(event, 'whatsapp')} draggable>
        Whatsapp
      </div> 

      <div className="dndnode rating hover:bg-blue-500 hover:text-white transition-colors duration-200 hover:border-none" onDragStart={(event) => onDragStart(event, 'rating')} draggable>
        Ratings
      </div> 

      <h2 className="text-md pb-3 flex gap-2 items-center"><PiArrowBendDownRightDuotone />  External Apis</h2> 
      
      <div className="dndnode asp hover:bg-blue-500 hover:text-white transition-colors duration-200 hover:border-none" onDragStart={(event) => onDragStart(event, 'asp')} draggable>
        Asp Tókio
      </div> 

      <div className="w-100 flex justify-center items-center">
        <button className="button-custom absolute bottom-0" onClick={handlerSave}>
          Generate Flow
        </button>
      </div>

      <Modal open={modalOpen} setOpen={setModalOpen} flow={modalData} />
    </aside>
  );
};

export default Sidebar;