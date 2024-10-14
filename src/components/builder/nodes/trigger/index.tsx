import { memo } from "react";
import { DefaultBase } from "../../customized/node/default";
import { Handle, Node, Position } from "reactflow";

type Props = {
    title: string;
};
export const TriggerNode = memo((node: Node<Props>) => {
    return <DefaultBase node={node} hasInput={false}>
        Start

        <Handle type="source" id="next" position={Position.Bottom}  style={{ background: 'green' }} />
    </DefaultBase>
})