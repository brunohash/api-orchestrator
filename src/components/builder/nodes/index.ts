import { TransactionNode } from "./transaction";
import { AuthenticationNode } from "./authentication";
import { TriggerNode } from "./trigger";
import { NodeTypes } from "reactflow";
import { CustomNode } from "./asp";
import { WhatsappNode } from "./whatsapp";
import { RatingNode } from "./ratings";
import  AnnotationNode from "./annotation";

export const nodeTypes = {
    authentication: AuthenticationNode,
    transaction: TransactionNode,
    trigger: TriggerNode,
    asp: CustomNode,
    whatsapp: WhatsappNode,
    rating: RatingNode,
    annotation: AnnotationNode
} satisfies NodeTypes;