import { useRef, useCallback, useMemo, DragEventHandler } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  useReactFlow,
  Background,
  MiniMap,
  NodeTypes,
  EdgeTypes,
  OnConnect,
} from 'reactflow';
import 'reactflow/dist/style.css';
import './index.css';
import { useDnD } from './hooks/useDnD';
import Sidebar from './components/Sidebar';
import { DnDProvider } from './contexts/DnDContext';
import { nodeTypes as CustomNodes } from './components/builder/nodes';

let id = 0;
const getId = () => `dndnode_${id++}`;

const initialNodes = [
  {
    id: getId(),
    type: 'trigger',
    position: { x: 250, y: 5 },
    data: { label: 'Trigger node' },
  },
  {
    id: getId(),
    type: 'authentication',
    position: { x: 100, y: 100 },
    data: { label: 'Authentication node' },
  },
  {
    id: getId(),
    type: 'transaction',
    position: { x: 400, y: 100 },
    data: { label: 'Transaction node' },
  },
]

const initialEdges = [
  { id: 'e1-2', source: initialNodes[0].id, sourceHandle: 'success', target: initialNodes[1].id, targetHandle: 'success' },
  { id: 'e2-3', source: initialNodes[1].id, sourceHandle: 'success', target: initialNodes[2].id, targetHandle: 'success' },
]

const DnDFlow = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();
  const { type } = useDnD();

  const nodeTypes = useMemo<NodeTypes>(() => CustomNodes, []);
  const edgeTypes = useMemo<EdgeTypes>(() => ({ }), []);

  const onConnect: OnConnect = useCallback(params => setEdges(eds => addEdge(params, eds)), [setEdges]);
  const onDragOver: DragEventHandler<HTMLDivElement> = useCallback(event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop: DragEventHandler<HTMLDivElement> = useCallback(
    event => {
      event.preventDefault();

      // check if the dropped element is valid
      if (!type) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [screenToFlowPosition, type],
  );

  return (
    <div className="dndflow">
      <div className="reactflow-wrapper" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          deleteKeyCode={['Delete', 'Backspace']}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          proOptions={{
            hideAttribution: true,
            account: 'reactflow',
          }}
        >
          <Controls />
          <Background />
          <MiniMap zoomable pannable />
        </ReactFlow>
      </div>
      <Sidebar />
    </div>
  );
};

export const App = () => (
  <ReactFlowProvider>
    <DnDProvider>
      <DnDFlow />
    </DnDProvider>
  </ReactFlowProvider>
);