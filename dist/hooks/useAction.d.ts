import type { INode } from '../index';
declare const useAction: () => {
    clickNode: (node?: INode) => void;
    addNode: (_node: INode | string, _newNodeType?: string) => void;
    addNodeInLoop: (newNodeType: string) => void;
    removeNode: (targetNode?: INode | INode[] | string | string[]) => void;
};
export default useAction;
