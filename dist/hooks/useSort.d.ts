import type { INode } from '../index';
declare const useSort: () => {
    backward: (node?: INode) => void;
    forward: (node?: INode) => void;
    start: (node?: INode) => void;
    end: (node?: INode) => void;
};
export default useSort;
