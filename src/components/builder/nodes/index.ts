import { TransactionNode } from "./transaction";
import { AuthenticationNode } from "./authentication";
import { TriggerNode } from "./trigger";
import { NodeTypes } from "reactflow";
import { AspNode } from "./asp";
import { WhatsappNode } from "./whatsapp";
import { RatingNode } from "./ratings";

export const nodeTypes = {
    authentication: AuthenticationNode,
    transaction: TransactionNode,
    trigger: TriggerNode,
    asp: AspNode,
    whatsapp: WhatsappNode,
    rating: RatingNode
} satisfies NodeTypes;