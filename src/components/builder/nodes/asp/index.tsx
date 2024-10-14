import { memo } from "react";
import { CustomBase } from "../../customized/node/custom";
import { Handle, Node, Position } from "reactflow";

type Props = {
    title: string;
};
export const AspNode = memo((node: Node<Props>) => {
    return <CustomBase node={node}>
        Asp - Tókio
    </CustomBase>
})