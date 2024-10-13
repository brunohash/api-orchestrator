import { memo, useEffect, useState } from "react";
import { CustomBase } from "../../customized/node/custom";
import { Handle, Position, Node, useReactFlow } from "reactflow";

type Props = {
    title: string;
};

type Condition = {
    id: string; 
    field: string;
    operator: string;
    value: string;
};

export const RatingNode = memo((node: Node<Props>) => {
    const [conditions, setConditions] = useState<Condition[]>([]);
    const [newCondition, setNewCondition] = useState<Condition>({
        id: '', 
        field: "",
        operator: "",
        value: "",
    });

    const { setNodes } = useReactFlow();

    useEffect(function()
    {
        setNodes((nodes) => nodes.map((n) => {
            if (n.id === node.id) {
                return { ...n, data: { ...n.data, conditions } };
            }

            return n;
        }));
    }, [conditions]);

    const addCondition = () => {
        const conditionId = `condition-${conditions.length}`; 
        const newCond = { ...newCondition, id: conditionId };
        setConditions([...conditions, newCond]);
        setNewCondition({ id: '', field: "", operator: "", value: "" });
    };

    return <CustomBase node={node}>
        Ratings
        <div>
            <small>Condições:</small>
            <div className="border rounded p-2">
                {conditions.map((cond) => (
                    <div key={cond.id} style={{ margin: '10px 0', position: 'relative' }} className="border rounded text-white bg-blue-300 p-2 text-sm">
                        {`Se ${cond.field} é ${cond.operator} ${cond.value}`}
                        <Handle
                            type="source"
                            id={cond.id}
                            position={Position.Right}
                            style={{ background: 'orange', top: '50%', transform: 'translateY(-50%)' }} // centraliza verticalmente o Handle
                        />
                    </div>
                ))}
            </div>
        </div>

        <div className="border rounded bg-orange-300 p-4 mt-2">
                <input
                    type="text"
                    placeholder="Campo"
                    className="text-small y-2 p-1 rounded text-sm w-full pl-3"
                    value="score"
                    onChange={(e) => setNewCondition({ ...newCondition, field: e.target.value })}
                    disabled
                />
                <select className="mt-2 p-1 border text-sm w-full"
                    value={newCondition.operator}
                    onChange={(e) => setNewCondition({ ...newCondition, operator: e.target.value })}
                >
                    <option value="">Selecionar operador</option>
                    <option value="maior">Maior que</option>
                    <option value="menor">Menor que</option>
                    <option value="vazio">Vazio</option>
                    <option value="igual">Igual</option>
                    <option value="preenchido">Preenchido</option>
                </select>
                <input
                    type="text"
                    placeholder="Valor"
                    className="text-small my-2 p-1 border rounded text-sm w-full"
                    value={newCondition.value}
                    onChange={(e) => setNewCondition({ ...newCondition, value: e.target.value })}
                />

                <button className="px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white disabled:bg-gray-400 text-sm p-3" onClick={addCondition} disabled={!newCondition.operator}>Adicionar Condição</button>
            </div>

        <Handle type="source" id="success" position={Position.Right} style={{ background: 'green' }} />
    </CustomBase>
})