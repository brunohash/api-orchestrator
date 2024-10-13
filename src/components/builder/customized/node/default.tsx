import { Handle, Node, Position } from "reactflow";
import { memo } from "react";

type Props = {
    node: Node;
    children: React.ReactNode;
    hasInput?: boolean; 
}
export const DefaultBase = memo(({ node, children, hasInput = true }: Props) => {
    const { data } = node

    return (
        <div
            className="w-[250px] border border-[#000] bg-white rounded-md p-2"
        >
            { hasInput && <Handle type="target" position={Position.Top} /> }
            {children}
        </div>
    );
});