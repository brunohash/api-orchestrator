import { memo } from "react";
import { DefaultBase } from "../../customized/node/default";
import { Handle, Node, Position } from "reactflow";

type Props = {
    title: string;
};
export const AuthenticationNode = memo((node: Node<Props>) => {
    return <DefaultBase node={node}>
        Authentication

        <Handle type="source" id="success" position={Position.Bottom} style={{ background: 'green' }} />
    </DefaultBase>
})