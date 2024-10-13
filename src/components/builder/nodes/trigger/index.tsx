import { memo } from "react";
import { NodeBase } from "../../customized/node";
import { Handle, Node, Position } from "reactflow";

type Props = {
    title: string;
};
export const TriggerNode = memo((node: Node<Props>) => {
    return <NodeBase node={node} hasInput={false}>
        Trigger

        <Handle type="source" id="next" position={Position.Bottom} />
    </NodeBase>
})