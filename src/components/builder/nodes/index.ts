import { TransactionNode } from "./transaction";
import { AuthenticationNode } from "./authentication";
import { TriggerNode } from "./trigger";
import { NodeTypes } from "reactflow";

export const nodeTypes = {
    authentication: AuthenticationNode,
    transaction: TransactionNode,
    trigger: TriggerNode
} satisfies NodeTypes;