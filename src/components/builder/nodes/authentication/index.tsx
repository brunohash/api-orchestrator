import { memo } from "react";
import { NodeBase } from "../../customized/node";
import { Handle, Node, Position } from "reactflow";

type Props = {
    title: string;
};
export const AuthenticationNode = memo((node: Node<Props>) => {
    return <NodeBase node={node}>
        Authentication

        <Handle type="source" id="success" position={Position.Bottom} style={{ background: 'green' }} />
    </NodeBase>
})