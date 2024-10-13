import { memo } from "react";
import { NodeBase } from "../../customized/node";
import { Node } from "reactflow";

type Props = {
    title: string;
};
export const TransactionNode = memo((node: Node<Props>) => {
    return <NodeBase node={node}>Transaction Node</NodeBase>
})