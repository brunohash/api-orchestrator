import { Handle, Node, Position } from "reactflow";
import { memo } from "react";
import { cn } from "../../../../libs/utils";
import { PiRocketLaunchDuotone } from "react-icons/pi";

type Props = {
    node: Node;
    children: React.ReactNode;
    hasInput?: boolean; 
}

export const DefaultBase = memo(({ node, children, hasInput = true }: Props) => {
    const { data, selected } = node

    return (
        <div className="relative">
            <div className={ cn("p-2 shadow-sm rounded-lg bg-white border w-[300px] transaction-colors duration-200", { 
                "border-blue-500": selected,
                "border-gray-300": !selected
             }) }>
                <div className="flex flex-col">
                    <div className="rounded-lg w-full h-12 p-3 flex items-center bg-gray-100 relative">
                        { hasInput && <Handle type="target" position={Position.Top} /> }
                        <PiRocketLaunchDuotone className='pr-1 text-blue-500 size-6' />
                        <div className="text-sm font-bold">{data.label}</div>
                    </div>
                    <div className="p-3">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
});